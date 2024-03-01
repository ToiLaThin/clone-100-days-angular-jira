import { Component, OnInit } from '@angular/core';
import { IssueStatus, JIssue } from '../../../../interface/issue';
import { Store } from '@ngrx/store';
import { selectorSortedIssuesFilterdByStatus } from '../../../../state/project/project.selectors';
import { projectFeatureKey } from '../../../../state/project/project.reducers';
import { IProjectState } from '../../../../state/project/projectState.interface';
import { Observable, map } from 'rxjs';

@Component({
    selector: 'board-dnd',
    templateUrl: './board-dnd.component.html',
    styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent implements OnInit {
    issueStatuses!: IssueStatus[];

    constructor(private _store: Store) {}

    ngOnInit(): void {
        this.issueStatuses = [
            IssueStatus.BACKLOG,
            IssueStatus.SELECTED,
            IssueStatus.INPROGRESS,
            IssueStatus.DONE,
        ];
    }

    //we cannot put a ton of stuff on the template, so we put it in the component
    getIssuesSortedAndFilteredByStatus(status: IssueStatus): Observable<JIssue[]> {
        const x =  this._store.select((state) =>
            selectorSortedIssuesFilterdByStatus(status)(
                state as { [projectFeatureKey]: IProjectState }
            )
            //select((state) => selectorSortedIssuesFilterdByStatus(status) return function 1, high order function
            // function 1 takes state as argument and returns selectorSortedIssuesFilterdByStatus(status) return result
        );
        return x;
    }
}
