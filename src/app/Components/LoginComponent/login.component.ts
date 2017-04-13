/**
 * Created by EDI-DELL-02 on 4/5/2017.
 */
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userEmail: any;
  password: any;
  constructor(private router: Router, private _service: studentService) {

  }
  clicked(event) {
    let scope = this;
    this._service.getUserToken(this.userEmail, this.password)
      .subscribe(function(state) {
        if(state) {
          scope.router.navigateByUrl('/students');
        } else {
          alert("Invalid attempt");
        }
      })
  }
}
