import { NgModule } from "@angular/core";
import { projectRoutes } from "./project.routes";
import { RouterModule } from "@angular/router";
import { NavBarLeftComponent } from "./components/navigation/navbar-left/navbar-left.component";
import { NavigationComponent } from "./components/navigation/navigation/navigation.component";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzIconModule } from "ng-zorro-antd/icon";
import { BrowserModule } from "@angular/platform-browser";
import { NZ_JIRA_ICONS } from './config/icons'
@NgModule({
    declarations: [
        NavBarLeftComponent,
        NavigationComponent
    ],
    imports: [
        RouterModule.forChild(projectRoutes),
        BrowserModule, // have ngFor, ngIf, etc
        NzToolTipModule,
        NzModalModule,
        NzDrawerModule,
        NzIconModule.forChild(NZ_JIRA_ICONS) // have icons, nzType, nzTheme directive , etc
    ],
    exports: [
        NavBarLeftComponent,
        NavigationComponent
    ]
})
export class ProjectModule {

}