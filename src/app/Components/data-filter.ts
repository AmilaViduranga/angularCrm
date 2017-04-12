/**
 * Created by Amila on 4/12/2017.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform, Injectable} from "@angular/core";

@Pipe({
  name: "dataFilter",
  pure: false
})

@Injectable()
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      //return array.filter(row=>row.firstName.indexOf(query) > -1);
      return array.filter(function(row) {
        let userName = row.firstName.toLowerCase();
        let word = query.toLowerCase();
        let reference = row.reference.toLowerCase();
        let email = row.email.toLowerCase();
        let mobile = row.mobile;
        if(userName.indexOf(word) > -1 || reference.indexOf(word) > -1 || email.indexOf(word) > -1 || mobile.indexOf(word) > -1) {
          return row;
        }
      })
    }
    return array;
  }
}
