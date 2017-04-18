/**
 * Created by Amila on 4/12/2017.
 */
import { Component} from '@angular/core';
import {studentService} from '../../Services/student.service';

@Component({
  selector: 'transaction-history',
  templateUrl: './transactionhistoryall.component.html',
  styleUrls: ['./transactionhistoryall.component.css'],
  providers: [studentService]
})
export class TransactionHistoryAllComponent{
  transactions: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "date";
  public sortOrder = "asc";

  constructor(private _service: studentService) {
    this.loadTransactions();
  }

  loadTransactions() {
    this._service.getTransactionInfo()
      .subscribe(
        (transactions) => {
          this.transactions = transactions;
        }
      );
  }
}
