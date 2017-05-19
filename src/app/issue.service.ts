import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';
import { ISSUES } from './mock-issues';

@Injectable()
export class IssueService {
    private issuesUrl = 'https://api.github.com/repos/angular/angular/issues';  // URL to GitHub Angular issues web api

    constructor(private http: Http) { }

    getIssues(): Promise<Issue[]> {
        return this.http.get(this.issuesUrl)
            .toPromise()
            .then(response => response.json() as Issue[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getIssuesDelayed(): Promise<Issue[]> {
        return new Promise(resolve => {
            // simulate 2 second delay
            setTimeout(() => resolve(this.getIssues()), 2000);
        });
    }

    getIssue(id: number): Promise<Issue> {
        return this.getIssues()
            .then(issues => issues.find(issue => issue.id === id));
    }
}