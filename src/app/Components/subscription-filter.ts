/**
 * Created by Amila on 4/12/2017.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform, Injectable} from "@angular/core";

@Pipe({
  name: "subscriptionFilter",
  pure: false
})

@Injectable()
export class SubscriptionFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      //return array.filter(row=>row.firstName.indexOf(query) > -1);
      return array.filter(function(row) {
        let word = query.toLowerCase();
        let email = row.email.toLowerCase();
        let reference = row.reference.toLowerCase();
        if(email.indexOf(word) > -1 || reference.indexOf(word) > -1) {
          return row;
        }
      })
    }
    return array;
  }
}
