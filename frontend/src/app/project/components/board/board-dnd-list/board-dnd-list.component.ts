import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IssueStatus, JIssue } from '../../../../interface/issue';
import { IssueStatusDisplay } from './../../../../interface/issue';
import { DummyDataProvider } from '../../../config/dummy_data';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorIssuesAppliedBoardFilter } from '../../../../state/filter/filter.selectors';
import { map } from 'rxjs';
import { filterFeatureKey } from '../../../../state/filter/filter.reducers';
import { IFilterState } from '../../../../state/filter/filterState.interface';

@Component({
    selector: 'board-dnd-list',
    templateUrl: './board-dnd-list.component.html',
    styleUrls: ['./board-dnd-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BoardDndListComponent implements OnInit {
    @Input() status!: IssueStatus;
    @Input() issuesSortedFilteredByStatus!: JIssue[];

    currentUserId!: string;
    IssueStatusDisplay = IssueStatusDisplay;

    issuesAfterAppliedBoardFilter$!: Observable<JIssue[]>;
    issuesToDisplayCount$!: Observable<number>;

    constructor(private _store: Store) {}

    ngOnInit(): void {
        this.currentUserId = '1'; //dummy data TODO get from state

        //filter by status is already done in the parent component
        //in this component, we only need to filter by user selected, ignore resolved, and only my issue
        this.issuesAfterAppliedBoardFilter$ = this._store.select((state) =>
            selectorIssuesAppliedBoardFilter(
                this.issuesSortedFilteredByStatus,
                this.currentUserId
            )(state as { [filterFeatureKey]: IFilterState })
        );
        this.issuesToDisplayCount$ = this.issuesAfterAppliedBoardFilter$.pipe(
            map(issuesToDisplay => issuesToDisplay.length)
        );
    }
}
