import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {DishService} from '../shared/services/dish.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  id;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.dishService.getDish(this.id)
      .then(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }

}
