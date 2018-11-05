import {Injectable} from '@angular/core';
import {Dish} from '../models/dish';
import {DISHES} from '../const/dishes';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DishService {

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: number): Observable<Dish> {
    return of(DISHES.filter((dish) => (+dish.id == id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishesID() {
    return of(DISHES.map(dish => dish.id));
  }
}
