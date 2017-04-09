import { Component} from '@angular/core';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'basic-info',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css'],
  providers: [studentService]
})
export class BasicInfoComponent{
	student: any;
	
	constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
		let scope = this;
		this.loadDetails(this.activatedRoute).subscribe(function(userId) {
			scope._service.getSpecificStudent(userId)
				.subscribe(studentData => scope.student = studentData.student)
		})
	};

	loadDetails(activatedRoute) {
		return Observable.create(function(observer) {
			activatedRoute.params.subscribe((params: Params) => {
		        observer.next(params['id']);
		        observer.complete();
		    });
		})
	}
}
