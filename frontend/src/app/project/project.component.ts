import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { projectActions } from "../state/project/project.actions";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    expanded!: boolean;
    constructor(
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.expanded = false;
        this.handleResize();
        this._store.dispatch(projectActions.getProject());
    }    

    private handleResize() {
        const match = window.matchMedia('(min-width: 1024px)');
        match.addEventListener('change', (e) => {
            console.log(e);
            this.expanded = e.matches;
            console.log(this.expanded);
        });
    }
}