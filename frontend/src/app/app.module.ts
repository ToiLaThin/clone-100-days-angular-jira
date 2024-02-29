import { NgModule } from "@angular/core";
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
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent],
    providers: [
    { provide: NZ_I18N, useValue: en_US }
  ]
})
export class AppModule {

}