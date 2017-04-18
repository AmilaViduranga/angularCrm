/**
 * Created by Amila on 4/18/2017.
 */
import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {historyService} from '../../../Services/history.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'password-history',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers: [
    historyService
  ]
})
export class PasswordHistoryComponent {
  passwordHistory: any;
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "id";
  public sortOrder = "asc";
  constructor(private _service: historyService, private activatedRoute: ActivatedRoute) {
    let scope = this;
    this.loadDetails(this.activatedRoute).subscribe(function(userId) {
      scope._service.getSpecificPasswordHistoryInfo(userId)
        .subscribe(function(passwordData) {
          if(passwordData) {
            scope.passwordHistory = passwordData;
          }
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
