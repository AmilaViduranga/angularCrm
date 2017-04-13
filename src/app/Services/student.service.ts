import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class studentService {
  private token:string;
  private actionUrl: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.actionUrl = 'http://localhost:8009/api/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getUserToken(userEmail, password) {
    return this.http.post(this.actionUrl,{
      email: userEmail,
      password: password
    }).map(function(res) {
      let response = res.json();
      if(response.status == 200) {
        localStorage.setItem('token',response.token);
        return true;
      }
      return false;
    })
  }

  getAllStudents() {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + "students/" + this.token)
        .map(res => res.json());
    }
  }

  getSpecificStudent(stdId) {
      this.token = localStorage.getItem('token');
      if(this.token != null) {
        return this.http.get(this.actionUrl+'students/view/'+this.token+'/'+stdId)
          .map(res => res.json());
      }
  }

  getSubscriptionInfo() {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + 'subscription/' + this.token)
        .map(res => res.json());
    }
  }

  getSubscriptionInfoOfOneStudent(stdId) {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + 'subscription/view/' + this.token + '/' + stdId)
        .map(res => res.json());
    }
  }

  getTransactionInfo() {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + 'transaction' + '/' + this.token)
        .map(res => res.json());
    }
  }
  getStudentTransactionInfoOfOne(stdId) {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + "transaction/view/" + this.token + "/" + stdId)
        .map(res => res.json());
    }
  }

  getAllCommunications() {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + 'communication/' + this.token)
        .map(res => res.json());
    }
  }

  getCommunicationDetailsIndividual(communicationId) {
    this.token = localStorage.getItem('token');
    if(this.token != null) {
      return this.http.get(this.actionUrl + 'communication/view/' + this.token + '/' + communicationId)
        .map(res => res.json());
    }
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

