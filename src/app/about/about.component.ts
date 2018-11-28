import {Component, Inject, OnInit} from '@angular/core';
import {LeaderService} from '../shared/services/leader.service';
import {Leader} from '../shared/models/leader';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
  activeSpinner = false;
  leaders: Leader[];
  leaderErrMess: string;

  constructor(private leaderService: LeaderService,
              @Inject('baseURL')  private baseURL) { }

  ngOnInit() {
    this.activeSpinner = true;
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders,
                  error => this.leaderErrMess = error,
                  () => { this.activeSpinner = false; });
  }



}
