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
  userId: any;
  userName: any;
  title: any;
  status: any;
  communicationType: any;
  message: any;
  flag: any;
  flagDescription: any;
  service: any;
  messageService: alertService;

  constructor(private _service: studentService, private _alert: alertService) {
    this.service = _service;
    this.messageService = _alert;
    this.userId = localStorage.getItem('systemUserId');
    this.userName = localStorage.getItem('systemUserName');
  };

  addNewHelp() {
    let data = {
      systemUserID: this.userId,
      systemUserName: this.userName,
      title: this.title,
      status: this.status,
      commType :this.communicationType,
      message: this.message,
      flag: this.flag,
      flagDesciption: this.flagDescription
    }
    if(data.systemUserID === localStorage.getItem('systemUserId') && data.systemUserName == localStorage.getItem('systemUserName')){
      this.service.addHelp(data)
        .subscribe(function(status) {
          alert(JSON.stringify(status));
          //scope.messageService.messageSuccess("Successfully inserted help");
        })
    } else {
      alert("please enter valid user id and username");
    }
  }
  toggleStatus() {
    this.flag = !this.flag;
  }
}
