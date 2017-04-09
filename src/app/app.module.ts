/*
 * module imported
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HistoryModule} from './Components/HistoryTaskComponent/history.module';
import {DataTableModule} from "angular2-datatable";
import { RouterModule }   from '@angular/router';
/*
 * component imported
 */
import { AppComponent } from './app.component';
import {IndividualUserComponent} from './Components/IndividualUserComponent/individualuser.component';
import {BasicInfoComponent} from './Components/BasicInfoComponent/basicinfo.component';
import {NavbarComponent} from './Components/NavbarComponent/navbar.component';
import {StudentInfoPanelComponent} from './Components/StudentInfoPanelComponent/studentinfopanel.component';
import {StudentInfoSlotComponent} from './Components/StudentInfoSlotComponent/studentinfoslot.component';
import {UserImageComponent} from './Components/UserImageComponent/userimage.component';
import {TabComponent} from './Components/TabComponent/tab.component';
import {SchoolComponent} from './Components/SchoolComponent/school.component';
import {SubscriptionComponent} from './Components/SubscriptionComponent/subscription.component';
import {TransactionComponent} from './Components/TransactionHistoryComponent/transaction.component';
import {CommunicationComponent} from './Components/CommunicationComponent/communication.component';
import {HistoryComponent} from './Components/HistoryComponent/history.component';
import {StudentHomeComponent} from './Components/StudentHomeComponent/studenthome.component';
/*
 * service imported
 */
import {studentService} from './Services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    IndividualUserComponent,
    BasicInfoComponent,
    NavbarComponent,
    StudentInfoPanelComponent,
    StudentInfoSlotComponent,
    UserImageComponent,
    TabComponent,
    SchoolComponent,
    SubscriptionComponent,
    TransactionComponent,
    CommunicationComponent,
    HistoryComponent,
    StudentHomeComponent
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HistoryModule,
    RouterModule.forRoot([
      {
        path: 'students',
        component: StudentHomeComponent
      },
      {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full'
      },
      {
        path: 'individualstudent/:id',
        component: IndividualUserComponent,
      }
    ])
  ],
  providers: [
    studentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
