/**
 * Created by Amila on 4/13/2017.
 */
import { Component, NgModule} from '@angular/core';
import {studentService} from '../../Services/student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'communication-detailed',
  templateUrl: './communicationdetailed.component.html',
  styleUrls: ['./communicationdetailed.component.css']
})
export class CommunicationDetailedComponent{
  communicationIndividual: any;

  constructor(private _service: studentService, private activatedRoute: ActivatedRoute) {
    let scope = this;
    this.loadDetails(this.activatedRoute).subscribe(function(comunicationId) {
      let communicationTag = comunicationId;
      scope._service.getCommunicationDetailsIndividual(communicationTag)
        .subscribe(function(communicationData) {
          scope.communicationIndividual = communicationData;
          console.log(scope.communicationIndividual);
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
