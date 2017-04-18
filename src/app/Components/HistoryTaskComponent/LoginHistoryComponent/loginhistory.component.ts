/**
 * Created by Amila on 4/17/2017.
 */
import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {historyService} from '../../../Services/history.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'login-history',
  templateUrl: './loginhistory.component.html',
  styleUrls: ['./loginhistory.component.css'],
  providers: [
    historyService
  ]
})
export class LoginHistoryComponent {
  sessions: any;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "id";
  public sortOrder = "asc";
  constructor(private _service: historyService, private activatedRoute: ActivatedRoute) {
    let scope = this;
    this.loadDetails(this.activatedRoute).subscribe(function(userId) {
      scope._service.getSpecificLoginInfo(userId)
        .subscribe(function(loginData) {
          console.log(loginData);
          scope.sessions = loginData;
        })
    })
  };

  loadDetails(activatedRoute) {
    return Observable.create(function(observer) {
      activatedRoute.params.subscribe((params: Params) => {
        observer.next(params['stdId']);
        observer.complete();
      });
    })
  }
}
