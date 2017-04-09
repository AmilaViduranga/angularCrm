import { Component, NgModule, OnInit, Input} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BasicInfoComponent} from '../BasicInfoComponent/basicinfo.component';
import {SchoolComponent} from '../SchoolComponent/school.component';
import {CommunicationComponent} from '../CommunicationComponent/communication.component';
import {HistoryComponent} from '../HistoryComponent/history.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {

}
