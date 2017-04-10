import { Component, Input} from '@angular/core';

@Component({
  selector: 'school-info',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent{
  @Input() studentDetails: any;
}

