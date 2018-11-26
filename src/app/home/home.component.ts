import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {Promotion} from '../shared/models/promotion';
import {DishService} from '../shared/services/dish.service';
import {PromotionService} from '../shared/services/promotion.service';
import {Leader} from '../shared/models/leader';
import {LeaderService} from '../shared/services/leader.service';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  leader: Leader;
  dish: Dish;
  promotion: Promotion;
  dishErrMess;
  promErrMess;
  leaderErrMess;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              private leaderservice: LeaderService,
              @Inject('baseURL') private baseURL) { }

  ngOnInit() {
   this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish,
                                                error => { this.dishErrMess = error; });
   this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion,
                                                          error => { this.promErrMess = error; });
   this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader,
                                                      error => {this.leaderErrMess = error; });
  }

}
