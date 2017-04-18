import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import {CommunicationHistoryComponent} from './CommunicationHistoryComponent/communicationhistory.component';
import {LoginHistoryComponent} from './LoginHistoryComponent/loginhistory.component';
import {historyService} from '../../Services/history.service';

@NgModule({
  declarations: [
    CommunicationHistoryComponent,
    LoginHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [
    historyService
  ],
  bootstrap: [],
  exports: [
  	CommunicationHistoryComponent,
    LoginHistoryComponent
  ]
})
export class HistoryModule { }
