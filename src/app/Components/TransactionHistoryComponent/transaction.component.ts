import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'transaction-info',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
	transactionInfo: any;

	constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
	  	let scope = this;
		this.loadDetails(this.activatedRoute).subscribe(function(userId) {
			let userIdTags = userId;
			scope._service.getStudentTransactionInfoOfOne(userIdTags)
				.subscribe(function(subscribeInfo) {
					scope.transactionInfo = subscribeInfo;
				})
		});
	}

	loadDetails(activatedRoute) {
		return Observable.create(function(observer) {
			activatedRoute.params.subscribe((params: Params) => {
		        observer.next(params['stdId']);
		        observer.complete();
		    });
		});
	}
}
