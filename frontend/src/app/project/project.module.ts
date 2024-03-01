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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { BrowserModule } from "@angular/platform-browser";
import { NZ_JIRA_ICONS } from './config/icons'
import { JiraControlModule } from "../jira-control/jira-control.module";
import { AddIssueModalComponent } from "./components/add-issue-modal/add-issue-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from '@angular/cdk/drag-drop';
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
import { BoardDndComponent } from "./components/board/board-dnd/board-dnd.component";
import { BoardDndListComponent } from "./components/board/board-dnd-list/board-dnd-list.component";
import { IssueCardComponent } from "./components/issues/issue-card/issue-card.component";
import { IssueModalComponent } from "./components/issues/issue-modal/issue-modal.component";
import { IssueDetailComponent } from "./components/issues/issue-detail/issue-detail.component";
import { IssueTypeComponent } from "./components/issues/issue-type/issue-type.component";
import { IssueTitleComponent } from "./components/issues/issue-title/issue-title.component";
import { TextFieldModule } from "@angular/cdk/text-field";
import { IssueStatusComponent } from "./components/issues/issue-status/issue-status.component";
import { IssueReporterComponent } from "./components/issues/issue-reporter/issue-reporter.component";
import { IssueAssigneesComponent } from "./components/issues/issue-assignees/issue-assignees.component";
import { IssuePriorityComponent } from "./components/issues/issue-priority/issue-priority.component";
import { IssueCommentsComponent } from "./components/issues/issue-comments/issue-comments.component";
import { IssueCommentComponent } from "./components/issues/issue-comment/issue-comment.component";
import { FullIssueDetailComponent } from "./pages/full-issue-detail/full-issue-detail.component";
import { CommonModule } from "@angular/common";
import { IssueDeleteModalComponent } from "./components/issues/issue-delete-modal/issue-delete-modal.component";
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
        BoardDndComponent,
        BoardDndListComponent,
        IssueCardComponent,
        
        IssueModalComponent,
        IssueTypeComponent,
        IssueTitleComponent,
        IssueDetailComponent,
        IssueStatusComponent,
        IssueReporterComponent,
        IssueAssigneesComponent,
        IssuePriorityComponent,
        IssueCommentsComponent,
        IssueCommentComponent,
        IssueDeleteModalComponent,

        FullIssueDetailComponent,

        ProjectComponent,
    ],
    imports: [
        RouterModule.forChild(projectRoutes),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        JiraControlModule,
        NzToolTipModule,
        NzModalModule,
        NzDrawerModule,
        NzPopoverModule,
        NzIconModule.forChild(NZ_JIRA_ICONS), // have icons, nzType, nzTheme directive , etc
        NzSelectModule,
        NzDropDownModule,
        DragDropModule, //angular material drag drop cdk
        TextFieldModule, //for using CdkTextareaAutosize in textarea
    ],
    exports: [
        NavigationComponent,
        ProjectComponent,
        AddIssueModalComponent,//only import parent component not select child component
    ]
})
export class ProjectModule {

}