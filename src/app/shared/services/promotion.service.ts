import {Injectable} from '@angular/core';
import { Promotion } from '../models/promotion';
import { PROMOTIONS } from '../const/promotions';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './ProcessHTTPMsg.service';

@Injectable()
export class PromotionService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions() {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string) {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion() {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  }
}
