/**
 * Created by Amila on 4/14/2017.
 */
import { Component, NgModule} from '@angular/core';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'report-abuse-detailed',
  templateUrl: './reportabusedetailed.componenet.html',
  styleUrls: ['./reportabusedetailed.componenet.css']
})
export class ReportAbuseDetailedComponent{
  reportAbuseIndividual: any;

  constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
    let scope = this;
    this.loadDetails(this.activatedRoute).subscribe(function(abuseId) {
      let abuseTag = abuseId;
      scope._service.getReportAbuseIndividually(abuseTag)
        .subscribe(function(abuseData) {
          scope.reportAbuseIndividual = abuseData;
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
