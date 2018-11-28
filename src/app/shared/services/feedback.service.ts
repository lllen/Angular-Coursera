import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcessHTTPMsgService} from './ProcessHTTPMsg.service';
import {baseURL} from '../const/baseurl';
import {Feedback} from '../models/feedback';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class FeedbackService {
    constructor(private http: HttpClient,
                private processHTTPMsgService: ProcessHTTPMsgService) { }

     putFeedback(feedback: Feedback) {
         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type':  'application/json'
             })
         };
        return this.http.post(`${baseURL}feedback`, feedback, httpOptions)
            .pipe(catchError(this.processHTTPMsgService.handleError));
     }
}
