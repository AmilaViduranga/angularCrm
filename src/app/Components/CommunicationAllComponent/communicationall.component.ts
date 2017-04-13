/**
 * Created by Amila on 4/13/2017.
 */
import { Component} from '@angular/core';
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'communication-all',
  templateUrl: './communicationall.component.html',
  styleUrls: ['./communicationall.component.css'],
  providers: [studentService]
})
export class CommunicationAllComponent{
  communications: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "system_user_id";
  public sortOrder = "asc";

  constructor(private _service: studentService) {
    this.loadCommunications();
  }

  loadCommunications() {
    this._service.getAllCommunications()
      .subscribe(
        (communications) => {
          this.communications = communications;
        }
      );
  }
}
