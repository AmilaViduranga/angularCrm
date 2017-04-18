/**
 * Created by Amila on 4/17/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {serverAddressesService} from './serverAddress.service';

@Injectable()
export class historyService {
  token: any;
  actionUrl: any;
  headers: any;

  constructor(private http: Http, private service:serverAddressesService) {
    this.actionUrl = service.actionUrl;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getSpecificLoginInfo(userId) {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.post(this.actionUrl+'history/get_student_session',{
        ses_stu_id: userId,
        token: this.token
      }).map(res => res.json());
    }
  }
}
