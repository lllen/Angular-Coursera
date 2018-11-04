import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/models/dish';
import {Promotion} from '../shared/models/promotion';
import {DishService} from '../shared/services/dish.service';
import {PromotionService} from '../shared/services/promotion.service';
import {Leader} from '../shared/models/leader';
import {LeaderService} from '../shared/services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  leader: Leader;
  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              private leaderservice: LeaderService) { }

  ngOnInit() {
   this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish);
   this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
   this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);
  }

}
