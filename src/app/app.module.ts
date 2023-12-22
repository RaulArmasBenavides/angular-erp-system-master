import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './shared/header/header.component';
import { ScheduleComponent } from './components/events/schedule/schedule.component';
import { NotificationComponent } from './components/notifications/notification/notification.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetingsComponent } from './components/events/meetings/meetings.component';
import { NotificationListComponent } from './components/notifications/notification-list/notification-list.component';
import { AuthComponent } from './auth/auth.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { SyllabusListComponent } from './components/syllabus-list/syllabus-list.component';
import { EseSchedulerComponent } from './components/ese-scheduler/ese-scheduler.component';
import { EseListComponent } from './components/ese-list/ese-list.component';
import { CieEntryComponent } from './components/cie-entry/cie-entry.component';
import { CieMarksListComponent } from './components/cie-marks-list/cie-marks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScheduleComponent,
    NotificationComponent,
    MeetingsComponent,
    NotificationListComponent,
    AuthComponent,
    SyllabusComponent,
    SyllabusListComponent,
    EseSchedulerComponent,
    EseListComponent,
    CieEntryComponent,
    CieMarksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
