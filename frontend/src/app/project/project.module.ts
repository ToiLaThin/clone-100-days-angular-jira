import { NgModule } from "@angular/core";
import { projectRoutes } from "./project.routes";
import { RouterModule } from "@angular/router";
import { NavBarLeftComponent } from "./components/navigation/navbar-left/navbar-left.component";
import { NavigationComponent } from "./components/navigation/navigation/navigation.component";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BrowserModule } from "@angular/platform-browser";
import { NZ_JIRA_ICONS } from './config/icons'
import { JiraControlModule } from "../jira-control/jira-control.module";
import { AddIssueModalComponent } from "./components/add-issue-modal/add-issue-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IssueTypeSelectComponent } from "./components/add-issue-modal/issue-type-select/issue-type-select.component";
import { IssuePrioritySelectComponent } from "./components/add-issue-modal/issue-priority-select/issue-priority-select.component";
import { IssueReporterSelectComponent } from "./components/add-issue-modal/issue-reporter-select/issue-reporter-select.component";
import { UserComponent } from "./components/user/user.component";
import { IssueAssigneesSelectComponent } from "./components/add-issue-modal/issue-assignees-select/issue-assignees-select.component";
import { SearchDrawerComponent } from "./components/search/search-drawer/search-drawer.component";
import { IssueResultComponent } from "./components/search/issue-result/issue-result.component";
import { SideBarComponent } from "./components/navigation/sidebar/sidebar.component";
import { ResizerComponent } from "./components/navigation/resizer/resizer.component";
import { ProjectSettingsComponent } from "./pages/settings/settings.component";
import { ProjectComponent } from "./project.component";
import { BoardComponent } from "./pages/board/board.component";
import { BoardFilterComponent } from "./components/board/board-filter/board-filter.component";
@NgModule({
    declarations: [
        NavBarLeftComponent,
        NavigationComponent,
        AddIssueModalComponent,
        IssueTypeSelectComponent,
        IssuePrioritySelectComponent,
        IssueReporterSelectComponent,
        UserComponent,
        IssueAssigneesSelectComponent,

        SearchDrawerComponent,
        IssueResultComponent,

        SideBarComponent,
        ResizerComponent,

        ProjectSettingsComponent,
        BoardComponent,
        BoardFilterComponent,

        ProjectComponent,
    ],
    imports: [
        RouterModule.forChild(projectRoutes),
        BrowserModule, // have ngFor, ngIf, etc
        ReactiveFormsModule,
        FormsModule,
        JiraControlModule,
        NzToolTipModule,
        NzModalModule,
        NzDrawerModule,
        NzPopoverModule,
        NzIconModule.forChild(NZ_JIRA_ICONS), // have icons, nzType, nzTheme directive , etc
        NzSelectModule
    ],
    exports: [
        NavigationComponent,
        ProjectComponent,
        AddIssueModalComponent,//only import parent component not select child component
    ]
})
export class ProjectModule {

}