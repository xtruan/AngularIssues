import { Component, Input } from '@angular/core';
import { Issue } from './issue';

@Component({
  selector: 'issue-detail',
  template: `
  <div *ngIf="issue">
    <h2>{{issue.name}} details</h2>
    <div><label>id: </label>{{issue.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)] = "issue.name" placehoder="name">
    </div>
  </div>
  `
})

export class IssueDetailComponent {
    @Input() issue: Issue
}
