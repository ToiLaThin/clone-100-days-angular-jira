import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';

type Handler = () => void;
class NavItem {
    constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

@Component({
    selector: 'app-navbar-left',
    templateUrl: './navbar-left.component.html',
    styleUrls: ['./navbar-left.component.scss']
})
export class NavBarLeftComponent implements OnInit {
    items!: NavItem[];
    constructor(private _drawerService: NzDrawerService, private _modalService: NzModalService) {}

    ngOnInit(): void {
        this.items = [
            //icon match symbol name in svg definition, tooltip is the text that appears when hovering over the icon
            new NavItem('search', 'Search Issue', this.openCreateIssueModal.bind(this)), //? why is this binded to openCreateIssueModal, for what?
            new NavItem('plus', 'Create Issue', this.openSearchDrawer.bind(this)) //?
        ];
    }

    openCreateIssueModal(): void {
        this._modalService.create({
            nzTitle: 'Create Issue',
            nzContent: 'CreateIssueComponent',
            nzFooter: null,
            nzWidth: 700
        });
    }

    openSearchDrawer(): void {
        this._drawerService.create({
            nzTitle: undefined,
            nzContent: undefined,
            nzPlacement: 'left',
            nzClosable: false,
            nzWidth: 500
        });
    }
}
