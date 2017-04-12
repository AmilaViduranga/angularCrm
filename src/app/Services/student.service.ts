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
    this.token = "331691dd89cd14d85278322879e81b86a908a67b2ed28220acfbd0da9633aab8";
      this.actionUrl = 'http://localhost:8009/api/';
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  getUserToken() {

  }

  getAllStudents() {
    return this.http.get(this.actionUrl + "students/"+this.token)
      .map(res => res.json());
  }

  getSpecificStudent(stdId) {
      return this.http.get(this.actionUrl+'students/view/'+this.token+'/'+stdId)
        .map(res => res.json());
  }

  getSubscriptionInfo() {
    return this.http.get(this.actionUrl + 'subscription/'+ this.token)
      .map(res => res.json());
  }

  getSubscriptionInfoOfOneStudent(stdId) {
    return this.http.get(this.actionUrl + 'subscription/view/'+ this.token + '/'+ stdId)
      .map(res => res.json())
  }

  getStudentTransactionInfoOfOne(stdId) {
    return this.http.get(this.actionUrl + "transaction/view/" + this.token + "/" + stdId)
      .map(res => res.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

