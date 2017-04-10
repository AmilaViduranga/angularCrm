import { Component, Input} from '@angular/core';

@Component({
  selector: 'basic-info',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicInfoComponent{
	@Input() student:any;
}
