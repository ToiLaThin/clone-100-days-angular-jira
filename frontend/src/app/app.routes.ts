import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'project',
        pathMatch: 'full'
    },
    {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
    }

];
