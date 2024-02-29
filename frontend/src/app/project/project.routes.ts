import { Routes } from "@angular/router";
import { ProjectComponent } from "./project.component";
import { ProjectSettingsComponent } from "./pages/settings/settings.component";
import { BoardComponent } from "./pages/board/board.component";
import { FullIssueDetailComponent } from "./pages/full-issue-detail/full-issue-detail.component";

export const projectRoutes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
            {
                path: 'settings',
                component: ProjectSettingsComponent
            },
            {
                path: 'board',
                component: BoardComponent
            },
            {
                path: 'issue/:id',
                component: FullIssueDetailComponent
            }
        ]
    }
]