# Angular Issues

## System Requirements

Node.js, npm, and the TypeScript compiler.

Tested with node v6.10.3, npm v4.6.1, and tsc v2.3.2.

## Build and Run

Navigate to the root of the checked out repository then run the following:

```sh
npm install
npm start
```

This will transpile the TypeScript to JS and host the application in lite-server.

## Functionality

The application pulls in issues for the last 7 days from the [Angular issue tracker](https://github.com/angular/angular/issues). The following components are provided:

* Dashboard that displays the top 5 issues which are links to the details page for each issue.
* An issue list which displays issues from the past 7 days and provides links to the details page for each issue.
* A details page with information about the issue including number, title, created date, updated date, URL, user login, assignee login, and body (text and images).
* Issue detail pages support direct linking by issue number.

## Note

The unauthenticated GitHub API which this application makes use of is limited to **60 requests per hour**. After that is exhausted, the app will report an error until the time is reset.