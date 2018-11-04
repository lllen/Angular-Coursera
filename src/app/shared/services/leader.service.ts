import {Injectable} from '@angular/core';
import {LEADERS} from '../const/leaders';

@Injectable()
export class LeaderService {
  getLeaders() {
    return LEADERS;
  }

  getFeaturedLeader() {
    return this.getLeaders().filter(leader => leader.featured)[0];
  }
}
