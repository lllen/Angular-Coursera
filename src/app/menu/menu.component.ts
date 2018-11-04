import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/models/dish';
import {DishService} from '../shared/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  dishes;
  selectedDish;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }

  onSelect(dish) {
    this.selectedDish = dish;
  }
}


