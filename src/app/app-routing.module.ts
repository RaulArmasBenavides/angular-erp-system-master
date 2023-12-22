import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from './components/events/schedule/schedule.component'
import {LeaveComponent} from './components/leave/leave.component'
import {NotificationComponent} from './components/notifications/notification/notification.component'
import { MeetingsComponent } from './components/events/meetings/meetings.component';
import { NotificationListComponent } from './components/notifications/notification-list/notification-list.component';
import { AuthComponent } from './auth/auth.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { SyllabusListComponent } from './components/syllabus-list/syllabus-list.component';
import { EseSchedulerComponent } from './components/exams/ese-scheduler/ese-scheduler.component';
import { EseListComponent } from './components/exams/ese-list/ese-list.component';
import { CieEntryComponent } from './components/exams/cie-entry/cie-entry.component';
import { CieMarksListComponent } from './components/cie-marks-list/cie-marks-list.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'notifications-list', component: NotificationListComponent },
  { path: 'syllabus-list', component: SyllabusListComponent },
  { path: 'cie-marks-list', component: CieMarksListComponent },
  { path: 'ese-list', component: EseListComponent },
  { path: 'scheduler', component: EseSchedulerComponent },
  { path: 'cie-entry', component: CieEntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
