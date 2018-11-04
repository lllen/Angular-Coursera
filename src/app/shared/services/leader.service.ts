import {Injectable} from '@angular/core';
import {LEADERS} from '../const/leaders';

@Injectable()
export class LeaderService {
  getLeaders() {
    return Promise.resolve(LEADERS);
  }

  getFeaturedLeader() {
    return Promise.resolve(LEADERS.filter(leader => leader.featured)[0]);
  }
}
