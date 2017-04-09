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
    this.token = "4a2e566eac65bfd631d45e8630b4fcbfe9185735d8be6c92296d4d6b288b7e8c";
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

