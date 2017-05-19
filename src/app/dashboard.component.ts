import { Component, OnInit } from '@angular/core';

import { Issue } from './issue';
import { IssueService } from './issue.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    issues: Issue[] = [];

    constructor(private issueService: IssueService) { }

    ngOnInit(): void {
        this.issueService.getIssues()
            .then(issues => this.issues = issues.slice(0,5));
    }
}
