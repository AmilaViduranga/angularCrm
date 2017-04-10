import { Component, NgModule} from '@angular/core';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'subscription-info',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent{
  subInfo: any;
  constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
  	let scope = this;
	this.loadDetails(this.activatedRoute).subscribe(function(userId) {
		let userIdTags = userId;
		scope._service.getSubscriptionInfoOfOneStudent(userIdTags)
			.subscribe(function(subscribeInfo) {
				scope.subInfo = subscribeInfo;
			})
	})
  }

  loadDetails(activatedRoute) {
		return Observable.create(function(observer) {
			activatedRoute.params.subscribe((params: Params) => {
		        observer.next(params['id']);
		        observer.complete();
		    });
		})
	}
}

	