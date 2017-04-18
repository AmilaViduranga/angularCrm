/**
 * Created by Amila on 4/15/2017.
 */
import { Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {studentService} from '../../Services/student.service';
import {alertService} from '../../Services/allerts.service';

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
  messageService: alertService;

  constructor(private activatedRoute: ActivatedRoute, private _service: studentService, private _alert: alertService) {
    this.service = _service;
    this.messageService = _alert;
    activatedRoute.params.subscribe((params: Params) => {
      if(params['id'] == 'newhelp' || params['name'] == 'newhelp') {
        this.user = {
          userId : null,
          userName: null
        }
      } else {
        this.user = {
          userId : params['id'],
          userName: params['name']
        }
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
    if(data.systemUserID === null || data.systemUserName == null){
      alert("please enter valid user id and username");
    } else {
      this.service.addHelp(data)
        .subscribe(function(status) {
          alert(JSON.stringify(status));
          //scope.messageService.messageSuccess("Successfully inserted help");
        })
    }
  }
  toggleStatus() {
    this.flag = !this.flag;
  }
}
