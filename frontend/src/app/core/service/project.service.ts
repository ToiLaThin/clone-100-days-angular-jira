import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from './../../../environments/environment.development';
import { JProject } from "../../interface/project";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class ProjectService {
    constructor(
        private _http: HttpClient
    ) {}

    getProject(): Observable<JProject> {
        return this._http.get<JProject>(`${env.apiUrl}/project.json`);
    }
}