import {Injectable} from '@angular/core';
import {LEADERS} from '../const/leaders';
import { of, Observable } from 'rxjs';
import {catchError, delay, map} from 'rxjs/operators';
import {Leader} from '../models/leader';
import {HttpClient} from '@angular/common/http';
import {ProcessHTTPMsgService} from './ProcessHTTPMsg.service';
import {baseURL} from '../const/baseurl';
import {Promotion} from '../models/promotion';

@Injectable()
export class LeaderService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders() {
    return this.http.get<Leader[]>(`${baseURL}leadership`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(LEADERS).pipe(delay(2000));
  }

  getFeaturedLeader() {
    return this.http.get<Promotion>(`${baseURL}leadership?featured=true`)
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
