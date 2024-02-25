import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { JiraControlModule } from "./jira-control/jira-control.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [AppComponent],
    imports: [
        RouterModule.forRoot(routes),
        JiraControlModule,
        BrowserModule,
        CommonModule
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {

}