/**
 * Created by Amila on 4/14/2017.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform, Injectable} from "@angular/core";

@Pipe({
  name: "feedbackFilter",
  pure: false
})

@Injectable()
export class FeedbackFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter(function(row) {
        let word = query.toLowerCase();
        let dateTime = row.date.toLowerCase();
        let name = row.full_name.toLowerCase();
        if(dateTime.indexOf(word) > -1 || name.indexOf(word) > -1) {
          return row;
        }
      })
    }
    return array;
  }
}
