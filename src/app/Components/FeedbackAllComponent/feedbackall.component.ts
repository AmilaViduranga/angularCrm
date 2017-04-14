/**
 * Created by Amila on 4/14/2017.
 */
import { Component} from '@angular/core';
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'feedback-all',
  templateUrl: './feedbackall.component.html',
  styleUrls: ['./feedbackall.component.css']
})
export class FeedbackAllComponent{
  feedbacks: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "student_id";
  public sortOrder = "asc";

  constructor(private _service: studentService) {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this._service.getAllFeedbacks()
      .subscribe(
        (feedbacks) => {
          this.feedbacks = feedbacks;
        }
      );
  }
}
