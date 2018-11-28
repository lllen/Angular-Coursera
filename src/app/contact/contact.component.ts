import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactType, Feedback} from '../shared/models/feedback';
import {expand, flyInOut} from '../animations/app.animation';
import {FeedbackService} from '../shared/services/feedback.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackCopy: Feedback;
  contactType = ContactType;
  formErrors = {
      'firstName': '',
      'lastName': '',
      'telNum': '',
      'email': ''
  };

  validationMessages = {
      'firstName': {
          'required':      'First Name is required.',
          'minlength':     'First Name must be at least 2 characters long.',
          'maxlength':     'FirstName cannot be more than 25 characters long.'
      },
      'lastName': {
          'required':      'Last Name is required.',
          'minlength':     'Last Name must be at least 2 characters long.',
          'maxlength':     'Last Name cannot be more than 25 characters long.'
      },
      'telNum': {
          'required':      'Tel. number is required.',
          'pattern':       'Tel. number must contain only numbers.'
      },
      'email': {
          'required':      'Email is required.',
          'email':         'Email not in valid format.'
      },
  };

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
      this.feedbackForm = this.fb.group({
          firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
          lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
          telNum: ['', [Validators.required, Validators.pattern] ],
          email: ['', [Validators.required, Validators.email] ],
          agree: false,
          contactType: 'None',
          message: ''
      });

      this.feedbackForm.valueChanges
          .subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
      if (!this.feedbackForm) { return; }
      const form = this.feedbackForm;
      for (const field in this.formErrors) {
          if (this.formErrors.hasOwnProperty(field)) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              const control = form.get(field);
              if (control && control.dirty && !control.valid) {
                  const messages = this.validationMessages[field];
                  for (const key in control.errors) {
                      if (control.errors.hasOwnProperty(key)) {
                          this.formErrors[field] += messages[key] + ' ';
                      }
                  }
              }
          }
      }
  }

  onSubmit() {
    this.feedbackService.putFeedback(this.feedbackForm.value).subscribe(data => {
        this.feedbackCopy = data; },
        errmess => { console.log(<any>errmess); });
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstName: '',
      lastName: '',
      telNum: '',
      email: '',
      agree: false,
      contactType: 'None',
      message: ''
    });
   // this.feedbackForm.resetForm();
  }

  loadFeedbackOj() {
      return {
          firstName: this.feedbackForm.value.firstName,
          lastName: this.feedbackForm.value.lastName,
          telNum: this.feedbackForm.value.telNum,
          email: this.feedbackForm.value.email,
          agree: this.feedbackForm.value.agree,
          contactType: this.feedbackForm.value.contactType,
          message: this.feedbackForm.value.message
      };
    }

}


