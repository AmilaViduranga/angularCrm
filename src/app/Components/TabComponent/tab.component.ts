import { Component, NgModule, OnInit, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BasicInfoComponent} from '../BasicInfoComponent/basicinfo.component';
import {SchoolComponent} from '../SchoolComponent/school.component';
import {CommunicationComponent} from '../CommunicationComponent/communication.component';
import {HistoryComponent} from '../HistoryComponent/history.component';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers: [studentService]
})

export class TabComponent {
	student: any;

	constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
		let scope = this;
		this.loadDetails(this.activatedRoute).subscribe(function(userId) {
			let userIdTag = userId;
			scope._service.getSpecificStudent(userIdTag)
				.subscribe(function(studentData) {
					scope.student = studentData.student
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
