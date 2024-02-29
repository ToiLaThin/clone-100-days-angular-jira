import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    expanded!: boolean;
    constructor() {}

    ngOnInit(): void {
        this.expanded = false;
        this.handleResize();
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