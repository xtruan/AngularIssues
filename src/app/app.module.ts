import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'
import { IssuesComponent } from './issues.component';
import { IssueDetailComponent } from './issue-detail.component';
import { IssueService } from './issue.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    IssuesComponent,
    IssueDetailComponent
  ],
  providers: [
    IssueService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
