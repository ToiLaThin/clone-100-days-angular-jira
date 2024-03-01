import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IssueStatus, JIssue } from '../../../../interface/issue';
import { IssueStatusDisplay } from './../../../../interface/issue';
import { DummyDataProvider } from '../../../config/dummy_data';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectorIssuesAppliedBoardFilter } from '../../../../state/filter/filter.selectors';
import { map } from 'rxjs';
import { filterFeatureKey } from '../../../../state/filter/filter.reducers';
import { IFilterState } from '../../../../state/filter/filterState.interface';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { projectActions } from '../../../../state/project/project.actions';

@Component({
    selector: 'board-dnd-list',
    templateUrl: './board-dnd-list.component.html',
    styleUrls: ['./board-dnd-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BoardDndListComponent implements OnInit, OnDestroy {
    @Input() status!: IssueStatus;
    @Input() issuesSortedFilteredByStatus$!: Observable<JIssue[]>;
    //we must pass the observable from parent component, if not. When dropped, the drop element will not be updated
    //although the data model is updated, why?

    currentUserId!: string;
    IssueStatusDisplay = IssueStatusDisplay;

    issuesSortedFilteredByStatus!: JIssue[];
    issuesSortedFilteredByStatusSubcription!: Subscription;

    issuesAfterAppliedBoardFilter$!: Observable<JIssue[]>;
    issuesToDisplayCount$!: Observable<number>;

    constructor(private _store: Store) {}

    ngOnDestroy(): void {
        this.issuesSortedFilteredByStatusSubcription.unsubscribe();
    }

    ngOnInit(): void {
        this.currentUserId = 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1'; //dummy data TODO get from state
        this.issuesSortedFilteredByStatusSubcription = this.issuesSortedFilteredByStatus$.subscribe(
            (data) => {
                this.issuesSortedFilteredByStatus = data;
            }
        );

        //filter by status is already done in the parent component
        //in this component, we only need to filter by user selected, ignore resolved, and only my issue
        this.issuesAfterAppliedBoardFilter$ = this._store.select((state) =>
            selectorIssuesAppliedBoardFilter(
                this.issuesSortedFilteredByStatus,
                this.currentUserId
            )(state as { [filterFeatureKey]: IFilterState })
        );
        this.issuesToDisplayCount$ = this.issuesAfterAppliedBoardFilter$.pipe(
            map((issuesToDisplay) => issuesToDisplay.length)
        );
    }

    //data of event is of type JIssue
    drop(event: CdkDragDrop<JIssue[] | null>) {
        if (!event.item.data) {
            return;
        }
        // https://material.angular.io/cdk/drag-drop/api#CdkDragDrop
        const toBeUpdatedIssue = { ...event.item.data! };
        const newContainerIssues = [...event.container.data!];
        if (event.container === event.previousContainer) {
            moveItemInArray(newContainerIssues, event.previousIndex, event.currentIndex);
            this.updateIssuesStateListPosition(newContainerIssues);
        } else {
            transferArrayItem(
                event.previousContainer.data!,
                newContainerIssues,
                event.previousIndex,
                event.currentIndex
            );
            this.updateIssuesStateListPosition(newContainerIssues);
            toBeUpdatedIssue.status = event.container.id as IssueStatus; //we did use id to store status in template
            toBeUpdatedIssue.listPosition = event.currentIndex + 1;
            this._store.dispatch(projectActions.updateIssue({ updatedIssue: toBeUpdatedIssue }));
        }
    }

    private updateIssuesStateListPosition(issuesToUpdateListPosition: JIssue[]) {
        issuesToUpdateListPosition.forEach((issue, idx) => {
            const eachIssueWithUpdatedPosition = { ...issue, listPosition: idx + 1 };
            this._store.dispatch(
                projectActions.updateIssue({ updatedIssue: eachIssueWithUpdatedPosition })
            );
        });
    }
}
