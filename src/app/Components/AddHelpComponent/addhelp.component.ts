/**
 * Created by Amila on 4/15/2017.
 */
import { Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'add-help',
  templateUrl: './addhelp.component.html',
  styleUrls: ['./addhelp.component.css']
})
export class AddHelpComponent{
  user: any;
  title: any;
  status: any;
  communicationType: any;
  message: any;
  flag: any;
  flagDescription: any;
  service: any;

  constructor(private activatedRoute: ActivatedRoute, private _service: studentService) {
    this.service = _service;
    activatedRoute.params.subscribe((params: Params) => {
      this.user = {
        userId : params['id'],
        userName: params['name']
      }
    });
  };

  addNewHelp() {
    let data = {
      systemUserID: this.user.userId,
      systemUserName: this.user.userName,
      title: this.title,
      status: this.status,
      commType :this.communicationType,
      message: this.message,
      flag: this.flag,
      flagDesciption: this.flagDescription
    }
    this.service.addHelp(data)
      .subscribe(function(status) {
      alert(JSON.stringify(status));
    })
  }
  toggleStatus() {
    this.flag = !this.flag;
  }
}
