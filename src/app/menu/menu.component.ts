import {Component, Inject, OnInit} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {DishService} from '../shared/services/dish.service';
import {expand, flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
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

export class MenuComponent implements OnInit {
  dishes;
  errMess: string;
  selectedDish;

  constructor(private dishService: DishService,
              @Inject('baseURL') private baseURL) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }

  onSelect(dish) {
    this.selectedDish = dish;
  }
}


