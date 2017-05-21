import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';

@Injectable()
export class IssueService {
    // URL to GitHub Angular issues web api
    //private issuesUrlRoot = 'https://api.github.com/repos/angular/angular/issues';
    private issuesUrlRoot = 'http://192.168.111.137/angular_json/issues.json';

    constructor(private http: Http) { }

    getIssues(): Promise<Issue[]> {
        // subtract 7 days from current time
        let date: Date = new Date();
        date.setDate(date.getDate() - 7);
        // call api with since parameter set to 7 days  ago
        let issuesUrl: string = this.issuesUrlRoot + '?since=' + date.toISOString();
        
        console.log(issuesUrl);

        return this.http.get(issuesUrl)
            .toPromise()
            .then(response => response.json() as Issue[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getIssuesDelayed(): Promise<Issue[]> {
        return new Promise(resolve => {
            // simulate 2 second delay
            setTimeout(() => resolve(this.getIssues()), 2000);
        });
    }

    getIssue(number: number): Promise<Issue> {
        return this.getIssues()
            .then(issues => issues.find(issue => issue.number === number));
    }
}