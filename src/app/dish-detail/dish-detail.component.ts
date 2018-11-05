import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/models/dish';
import {DishService} from '../shared/services/dish.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  id;
  dishIds: string[];
  prev: string;
  next: string;

  constructor(private dishService: DishService,
              private route: ActivatedRoute,
              private location: Location) { }

    ngOnInit() {
        this.dishService.getDishesID().subscribe(dishIds => this.dishIds = dishIds);
        this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
            .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }

    setPrevNext(dishId: string) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

  goBack(): void {
    this.location.back();
  }

}
