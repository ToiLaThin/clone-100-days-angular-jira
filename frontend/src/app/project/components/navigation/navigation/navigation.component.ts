import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    expanded: boolean = false;

    toggleResize() {
        this.expanded = !this.expanded;
    }
}