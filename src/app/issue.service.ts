import { Injectable } from '@angular/core';

import { Issue } from './issue';
import { ISSUES } from './mock-issues';

@Injectable()
export class IssueService {

    getIssue(id: number): Promise<Issue> {
        return this.getIssues()
            .then(issues => issues.find(issue => issue.id === id));
    }


    getIssues(): Promise<Issue[]> {
        return Promise.resolve(ISSUES);
    }

    getIssuesDelayed(): Promise<Issue[]> {
        return new Promise(resolve => {
            // simulate 2 second delay
            setTimeout(() => resolve(this.getIssues()), 2000);
        });
    }
}