import { Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DataTableModule} from "angular2-datatable";
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'student-home',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css'],
  providers: [studentService]
})
export class StudentHomeComponent{
  students: any[];
  userId: any;
  constructor(private _service: studentService) {
    this.loadStudents();
  }

  loadStudents() {
    this._service.getAllStudents()
      .subscribe(
        students => this.students = students
      );
  }

  setId(id) {
    this.userId = id;
  }
}
