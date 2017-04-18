import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {serverAddressesService} from '../../Services/serverAddress.service';

@Component({
  selector: 'user-image',
  templateUrl: './userimage.component.html',
  styleUrls: ['./userimage.component.css']
})
export class UserImageComponent {
  communicationIndividual: any;
  serviceAddress: any;
  imageURL: any;

  constructor(private activatedRoute: ActivatedRoute, private server: serverAddressesService) {
    let scope = this;
    this.serviceAddress = server.fileManager;
    this.loadDetails(this.activatedRoute).subscribe(function(userId) {
        scope.imageURL = scope.serviceAddress + 'profile_image/top_student/'+userId;
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
