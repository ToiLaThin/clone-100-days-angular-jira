import { Routes } from "@angular/router";
import { ProjectComponent } from "./project.component";
import { ProjectSettingsComponent } from "./pages/settings/settings.component";

export const projectRoutes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
            {
                path: 'settings',
                component: ProjectSettingsComponent
            }
        ]
    }
]