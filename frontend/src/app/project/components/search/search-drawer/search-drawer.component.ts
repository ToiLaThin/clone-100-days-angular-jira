import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JIssue } from '../../../../interface/issue';
import { DummyDataProvider } from '../../../config/dummy_data';
import { Observable, Subscription, debounce, debounceTime, startWith } from 'rxjs';
import { Store } from '@ngrx/store';
import { projectFeatureKey } from '../../../../state/project/project.reducers';
import { IProjectState } from '../../../../state/project/projectState.interface';
import { selectorRecentIssues } from '../../../../state/filter/filter.selectors';
import { filterActions } from '../../../../state/filter/filter.actions';
import { selectorSearchResultIssues } from './../../../../state/filter/filter.selectors';

@Component({
    selector: 'search-drawer',
    templateUrl: './search-drawer.component.html',
    styleUrls: ['./search-drawer.component.scss']
})
//@UntilDestroy() for what ?
export class SearchDrawerComponent implements OnInit, OnDestroy {
    searchControl: FormControl = new FormControl('');
    searchResultIssues$!: Observable<JIssue[]>;
    recentIssues$!: Observable<JIssue[]>;
    searchTermSubscription!: Subscription;

    get hasSearchTermInput(): boolean {
        return !!this.searchControl.value; // !== null || !== undefined
    }

    constructor(private _store: Store) {}

    ngOnDestroy(): void {
        this.searchTermSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.recentIssues$ = this._store.select((state) => {
            return selectorRecentIssues(state as { [projectFeatureKey]: IProjectState });
        });
        this.searchResultIssues$ = this._store.select((state) => {
            return selectorSearchResultIssues(state as { [projectFeatureKey]: IProjectState })
        });
        this.searchTermSubscription = this.searchControl.valueChanges
            .pipe(debounceTime(500), startWith(this.searchControl.value)) //modify the observable to emit the value after 50ms of inactivity then subscribe to it
            .subscribe((updatedSearchTerm) =>
                this._store.dispatch(
                    filterActions.searchTermChanged({ updatedSearchTerm: updatedSearchTerm })
                )
            );
    }
}
