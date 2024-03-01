import { Actions, createEffect, ofType } from '@ngrx/effects';
import { projectActions } from './project.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProjectService } from '../core/service/project.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectEffects {
    constructor(private actions$: Actions, private _projectService: ProjectService) {}

    getProjectEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(projectActions.getProject),
            switchMap((action) =>
                this._projectService.getProject().pipe(
                    map((project) => projectActions.getProjectSuccess({ project: project })),
                    catchError((error) => of(projectActions.getProjectFailure({ error: error })))
                )
            )
        )
    );
}
