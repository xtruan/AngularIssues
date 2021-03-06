import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Issue } from './issue';
import { IssueService } from './issue.service'

@Component({
  selector: 'my-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})

export class IssuesComponent implements OnInit {
  issues: Issue[];
  selectedIssue: Issue;
  dateStr: string;

  constructor(
    private router: Router,
    private issueService: IssueService
  ) { }

  ngOnInit(): void {
    // subtract 7 days from current time
    let date = new Date();
    date.setDate(date.getDate() - 7);
    this.dateStr = date.toDateString();
    
    this.getIssues();
  }

  onSelect(issue: Issue): void {
    this.selectedIssue = issue;
  }

  getIssues(): void {
    this.issueService.getIssues().then(issues => this.issues = issues);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedIssue.number]);
  }

}