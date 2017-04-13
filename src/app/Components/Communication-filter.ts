/**
 * Created by Amila on 4/13/2017.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform, Injectable} from "@angular/core";

@Pipe({
  name: "communicationFilter",
  pure: false
})

@Injectable()
export class CommunicationFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter(function(row) {
        let word = query.toLowerCase();
        let dateTime = row.dateTime.toLowerCase();
        let title = row.title.toLowerCase();
        let userId = row.system_user_id.toLowerCase();
        let communicatioType = row.com_type.toLowerCase();
        if(dateTime.indexOf(word) > -1 || title.indexOf(word) > -1 || userId.indexOf(word) > -1 || communicatioType.indexOf(word) > -1) {
          return row;
        }
      })
    }
    return array;
  }
}
