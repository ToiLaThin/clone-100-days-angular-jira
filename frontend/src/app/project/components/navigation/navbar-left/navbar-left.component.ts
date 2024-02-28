import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddIssueModalComponent } from '../../add-issue-modal/add-issue-modal.component';
import { JUser } from '../../../../interface/user';
import { SearchDrawerComponent } from '../../search/search-drawer/search-drawer.component';
import { DummyDataProvider } from '../../../config/dummy_data';

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
    currentUser!: JUser;
    constructor(private _drawerService: NzDrawerService, private _modalService: NzModalService) {}

    ngOnInit(): void {
        this.items = [
            //icon match symbol name in svg definition, tooltip is the text that appears when hovering over the icon
            new NavItem('search', 'Search Issue', this.openSearchDrawer.bind(this)), //? why is this binded to openCreateIssueModal, for what?
            new NavItem('plus', 'Create Issue', this.openCreateIssueModal.bind(this)) //?
        ];
        this.currentUser = DummyDataProvider.Users[0];
    }

    openCreateIssueModal(): void {
        this._modalService.create({
            nzContent: AddIssueModalComponent, //the component to be displayed in the modal
            nzClosable: false,
            nzFooter: null,
            nzWidth: 700
        });
    }

    openSearchDrawer(): void {
        this._drawerService.create({
            nzTitle: undefined,
            nzContent: SearchDrawerComponent,
            nzPlacement: 'left',
            nzClosable: false,
            nzWidth: 500
        });
    }
}
