/**
 * Created by Amila on 4/12/2017.
 */
import * as _ from "lodash";
import {Pipe, PipeTransform, Injectable} from "@angular/core";

@Pipe({
  name: "transactionFilter",
  pure: false
})

@Injectable()
export class TransactionFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter(function(row) {
        let word = query.toLowerCase();
        let invoice = row.invoiceNo.toLowerCase();
        let reference = row.reference.toLowerCase();
        if(invoice.indexOf(word) > -1 || reference.indexOf(word) > -1) {
          return row;
        }
      })
    }
    return array;
  }
}
