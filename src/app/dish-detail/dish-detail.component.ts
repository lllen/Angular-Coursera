import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {DishService} from '../shared/services/dish.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  commentsForm: FormGroup;
  dish: Dish;
  id;
  dishIds: string[];
  prev: string;
  next: string;
  message;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) { }

    ngOnInit() {
        this.dishService.getDishesID().subscribe(dishIds => this.dishIds = dishIds);
        this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
            .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });

      this.commentsForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        comment: ['', Validators.required, Validators.minLength(10), Validators.maxLength(300)]
      });
    }

    setPrevNext(dishId: string) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.message = this.commentsForm.value;
    console.log(this.message);
    this.commentsForm.reset({
      firstname: '',
      comment: ''
    });
    // this.feedbackForm.resetForm();
  }

}
