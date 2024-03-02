import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { JiraControlModule } from "./jira-control/jira-control.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ProjectModule } from "./project/project.module";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { projectFeatureKey, projectReducer } from "./state/project/project.reducers";
import { ProjectEffects } from "./state/project/project.effects";
import { filterFeatureKey, filterReducer } from "./state/filter/filter.reducers";
import { QuillModule } from "ngx-quill";
registerLocaleData(en);

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
        JiraControlModule,
        BrowserModule, //only import once in root module // have ngFor, ngIf, etc
        CommonModule, //have pipes, etc
        ProjectModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({
          [projectFeatureKey]: projectReducer,
          [filterFeatureKey]: filterReducer
        }),
        EffectsModule.forRoot([ProjectEffects]),
        StoreDevtoolsModule.instrument({
          maxAge: 25, 
          logOnly: !isDevMode(),
          autoPause: true,
          traceLimit: 25
        }),
        QuillModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class AppModule {

}