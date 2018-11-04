import {Injectable} from '@angular/core';
import {Dish} from '../models/dish';
import {DISHES} from '../const/dishes';

@Injectable()
export class DishService {

   getDishes(): Dish[] {
     return DISHES;
   }

  getDish(id: string): Dish {
    return this.getDishes().filter(dish => (dish.id == id))[0];
  }

  getFeaturedDish(): Dish {
    return this.getDishes().filter(dish => dish.featured)[0];
  }
}
