import {Injectable} from '@angular/core';
import { Promotion } from '../models/promotion';
import { PROMOTIONS } from '../promotions';

@Injectable()
export class PromotionService {
  getPromotions(): Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promotion) => promotion.featured)[0];
  }
}
