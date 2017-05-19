import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Issue } from './issue';
import { IssueService } from './issue.service';


@Component({
    selector: 'issue-detail',
    templateUrl: './issue-detail.component.html',
    styleUrls: ['./issue-detail.component.css']
})

export class IssueDetailComponent implements OnInit {
    issue: Issue

    constructor(
        private issueService: IssueService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.issueService.getIssue(+params['id']))
            .subscribe(issue => this.issue = issue);
    }

    goBack(): void {
        this.location.back();
    }
}
