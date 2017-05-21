import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component'
import { IssuesComponent } from './issues.component';
import { IssueDetailComponent } from './issue-detail.component';
import { IssueService } from './issue.service';

class AppErrorHandler implements ErrorHandler {
  handleError(error: any) {
    console.error(error.toString());
    alert("An error occurred retrieving issues from the GitHub API.");
  }
}

@NgModule({
  imports: [
    CommonModule,
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
    IssueService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
