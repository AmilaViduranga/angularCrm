import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable";

import {CommunicationHistoryComponent} from './CommunicationHistoryComponent/communicationhistory.component';
import {LoginHistoryComponent} from './LoginHistoryComponent/loginhistory.component';
import {historyService} from '../../Services/history.service';
import {PasswordHistoryComponent} from './PasswordComponent/password.component';
@NgModule({
  declarations: [
    CommunicationHistoryComponent,
    LoginHistoryComponent,
    PasswordHistoryComponent
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
    LoginHistoryComponent,
    PasswordHistoryComponent
  ]
})
export class HistoryModule { }
