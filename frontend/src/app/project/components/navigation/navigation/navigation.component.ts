import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    @Input() expanded!: boolean;
    @Output() expandedManualChanged = new EventEmitter();

    toggleResize() {
        this.expandedManualChanged.emit();
    }
}