/*
 * module imported
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HistoryModule } from './Components/HistoryTaskComponent/history.module';
import { RouterModule }   from '@angular/router';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {DataTableModule} from "angular2-datatable";
/*
 * component imported
 */
import { AppComponent } from './app.component';
import {LoginComponent} from './Components/LoginComponent/login.component';
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
import {SubscriptionAllComponent} from './Components/SubscriptionAllComponent/subscriptionall.component';
import {TransactionHistoryAllComponent} from './Components/TransactionHistoryAllComponent/transactionhistoryall.component';
import {CommunicationAllComponent} from './Components/CommunicationAllComponent/communicationall.component';
import {CommunicationDetailedComponent} from './Components/CommuncationDetailedComponent/communicationdetailed.component';
import {FeedbackAllComponent} from './Components/FeedbackAllComponent/feedbackall.component';
import {FeedbackDetailedComponent} from './Components/FeedbackDetailed/feedbackdetailed.component';
import {ReportAbuseAllComponent} from './Components/ReportAbuseAllComponent/reportabuseall.component';
import {ReportAbuseDetailedComponent} from './Components/ReportAbuseDetailedComponent/reportabusedetailed.componenet';
/*
 * service imported
 */
import {studentService} from './Services/student.service';
/*
 * filters imported
 */
import { DataFilterPipe }   from './Components/data-filter';
import { SubscriptionFilterPipe }   from './Components/subscription-filter';
import { TransactionFilterPipe }   from './Components/Transaction-filter';
import {CommunicationFilterPipe} from './Components/Communication-filter';
import {FeedbackFilterPipe} from './Components/Feedback-filter';

@NgModule({
  declarations: [
    /*
     * ui components importing
     */
    AppComponent,
    LoginComponent,
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
    StudentHomeComponent,
    SubscriptionAllComponent,
    TransactionHistoryAllComponent,
    CommunicationAllComponent,
    FeedbackAllComponent,
    FeedbackDetailedComponent,
    ReportAbuseAllComponent,
    ReportAbuseDetailedComponent,
    /*
     * filters importing
     */
    DataFilterPipe,
    TransactionFilterPipe,
    SubscriptionFilterPipe,
    CommunicationFilterPipe,
    CommunicationDetailedComponent,
    FeedbackFilterPipe
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HistoryModule,
    Ng2FilterPipeModule,
    RouterModule.forRoot([
      {
        path: 'students',
        component: StudentHomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'individualstudent/:id',
        component: IndividualUserComponent,
      },
      {
        path: 'subscriptionAll',
        component: SubscriptionAllComponent
      },
      {
        path: 'transactionAll',
        component: TransactionHistoryAllComponent
      },
      {
        path: 'communicationAll',
        component: CommunicationAllComponent
      },
      {
        path: 'communication/:id',
        component: CommunicationDetailedComponent
      },
      {
        path: 'feedbackall',
        component: FeedbackAllComponent
      },
      {
        path: 'feedback/:id',
        component: FeedbackDetailedComponent
      },
      {
        path: 'reportAbuse',
        component: ReportAbuseAllComponent
      },
      {
        path: 'reportabuse/:id',
        component: ReportAbuseDetailedComponent
      }
    ])
  ],
  providers: [
    studentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
