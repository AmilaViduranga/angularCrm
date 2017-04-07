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
    this.token = "1f3581025ec4f8df2590b2f6aa79781badb5767cc608f8615f45faf1a2916d99";
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

