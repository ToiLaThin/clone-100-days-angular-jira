import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { JProject, ProjectCategory } from "../../../../interface/project";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
import { Store } from "@ngrx/store";
import { selectorIgnoreResolved, selectorOnlyMyIssue, selectorUserIdsFiltered } from "../../../../state/filter/filter.selectors";
import { filterFeatureKey } from "../../../../state/filter/filter.reducers";
import { IFilterState } from "../../../../state/filter/filterState.interface";
import { Observable, Subscription } from "rxjs";
import { filterActions } from "../../../../state/filter/filter.actions";
import { selectorProject } from "../../../../state/project/project.selectors";
import { projectFeatureKey } from "../../../../state/project/project.reducers";
import { IProjectState } from "../../../../state/project/projectState.interface";
@Component({
    selector: 'board-filter',
    templateUrl: './board-filter.component.html',
    styleUrls: ['./board-filter.component.scss']
})
export class BoardFilterComponent implements OnInit, OnDestroy {
    searchControl: FormControl = new FormControl('')
    selectedToFilterUserIds$!: Observable<string[]>;
    selectedToFilterUserIds!: string[]; //for isUserSelected
    selectedToFilterUserIdsSubscription!: Subscription;
    ignoreResolved$!: Observable<boolean>;
    onlyMyIssue$!: Observable<boolean>;

    project$!: Observable<JProject | null>;
    constructor(
        private _store: Store
    ) {}

    ngOnDestroy(): void {
        this.selectedToFilterUserIdsSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.selectedToFilterUserIds$ = this._store.select((state) => selectorUserIdsFiltered(state as { [filterFeatureKey]: IFilterState }));

        //ngneat/until-destroy to make sure that the subscription is destroyed when the component is destroyed, 
        //no subscrition.unsubscribe() require , please check repo to see
        this.selectedToFilterUserIdsSubscription = this.selectedToFilterUserIds$.subscribe((userIds) => {
            this.selectedToFilterUserIds = userIds;
        });

        this.project$ = this._store.select((state) => selectorProject(state as { [projectFeatureKey]: IProjectState }));

        this.ignoreResolved$ = this._store.select((state) => selectorIgnoreResolved(state as { [filterFeatureKey]: IFilterState }));
        
        this.onlyMyIssue$ = this._store.select((state) => selectorOnlyMyIssue(state as { [filterFeatureKey]: IFilterState }));

    }

    userChanged(user: JUser) {
        this._store.dispatch(filterActions.userIdsFilterSelectedChanged({ selectedUserId: user.id}))
    }

    onlyMyIssuesChanged() {
        this._store.dispatch(filterActions.onlyMyIssueFilterToggled());
    }

    ignoreResolvedChanged() {
        this._store.dispatch(filterActions.ignoreResolvedFilterToggled());
    }
    
    isUserSelected(user: JUser) {
        return this.selectedToFilterUserIds.includes(user.id);
    }    

    resetAll() {
        this._store.dispatch(filterActions.filterResetted());
    }

}