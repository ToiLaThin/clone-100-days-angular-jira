import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { JIssue } from "../../../../interface/issue";
import { DummyDataProvider } from "../../../config/dummy_data";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { projectFeatureKey } from "../../../../state/project.reducers";
import { IProjectState } from "../../../../state/projectState.interface";
import { selectorIssues } from "../../../../state/project.selectors";

@Component({
    selector: 'search-drawer',
    templateUrl: './search-drawer.component.html',
    styleUrls: ['./search-drawer.component.scss']
})
export class SearchDrawerComponent implements OnInit{
    searchControl: FormControl = new FormControl('');
    results!: JIssue[];
    recentIssues$!: Observable<JIssue[]>;

    get hasSearchTermInput(): boolean {
        return !!this.searchControl.value; // !== null || !== undefined
    }

    constructor(
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.recentIssues$ = this._store.select(state => {
            return selectorIssues(state as { [projectFeatureKey]: IProjectState})
        });
    }
}