import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
//import { serverConfiguration } from './ServerDetails';

@Injectable()
export class studentService {
  private token:string;
  private actionUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.token = "212a0aaaef265822490cfe8a87ef1d6af3e19afcba60121b143463e2776dc107";
      this.actionUrl = 'http://localhost:8009/api/';
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  getUserToken() {

  }

  getAllStudents() {
    return this.http.get(this.actionUrl + "students/"+this.token)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSpecificStudent(stdId) {
      return this.http.get(this.actionUrl+'students/view/'+this.token+'/'+stdId)
        .map(res => res.json())
        .catch(this.handleError);
  }

  getSubscriptionInfoOfOneStudent(stdId) {
    return this.http.get(this.actionUrl + 'subscription/view/'+ this.token + '/'+ stdId)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getStudentTransactionInfoOfOne(stdId) {
    return this.http.get(this.actionUrl + "transaction/view/" + this.token + "/" + stdId)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

