import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { IssueDetailComponent } from './issue-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IssueDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
