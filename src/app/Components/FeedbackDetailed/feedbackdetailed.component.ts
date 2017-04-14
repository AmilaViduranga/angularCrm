/**
 * Created by Amila on 4/14/2017.
 */
import { Component, NgModule} from '@angular/core';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'feedback-detailed',
  templateUrl: './feedbackdetailed.component.html',
  styleUrls: ['./feedbackdetailed.component.css']
})
export class FeedbackDetailedComponent{
  feedbackIndividual: any;

  constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
    let scope = this;
    this.loadDetails(this.activatedRoute).subscribe(function(feedbackId) {
      let feedbackTag = feedbackId;
      scope._service.getFeedbackIndividually(feedbackTag)
        .subscribe(function(communicationData) {
          scope.feedbackIndividual = communicationData;
        })
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
