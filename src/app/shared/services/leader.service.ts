import {Injectable} from '@angular/core';
import {LEADERS} from '../const/leaders';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class LeaderService {
  getLeaders() {
    return of(LEADERS).pipe(delay(2000));
  }

  getFeaturedLeader() {
    return of(LEADERS.filter(leader => leader.featured)[0]).pipe(delay(2000));
  }
}
