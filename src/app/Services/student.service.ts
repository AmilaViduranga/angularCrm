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
    this.token = "551c5b0db24ae3354cb89dbf273aa5c03dfb2f5417a3a5d7620a2ad1f38d2577";
      this.actionUrl = 'http://localhost:8009/api/students/';
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  getUserToken() {

  }

  getAllStudents() {
    return this.http.get(this.actionUrl + this.token)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSpecificStudent(stdId) {
      return this.http.get(this.actionUrl+'view/'+this.token+'/'+stdId)
        .map(res => res.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

