import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CommunicationHistoryComponent} from './CommunicationHistoryComponent/communicationhistory.component';

@NgModule({
  declarations: [
    CommunicationHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
  	CommunicationHistoryComponent
  ]
})
export class HistoryModule { }