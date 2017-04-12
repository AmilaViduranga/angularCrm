/**
 * Created by Amila on 4/12/2017.
 */
import { Component} from '@angular/core';
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'subscription-all',
  templateUrl: './subscriptionall.component.html',
  styleUrls: ['./subscriptionall.component.css'],
  providers: [studentService]
})
export class SubscriptionAllComponent{
  subscriptions: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private _service: studentService) {
    this.loadSubscriptions();
  }

  loadSubscriptions() {
    this._service.getSubscriptionInfo()
      .subscribe(
        (subscriptions) => {
          this.subscriptions = subscriptions;
        }
      );
  }
}
