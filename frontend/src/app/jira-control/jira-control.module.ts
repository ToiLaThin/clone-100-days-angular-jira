import { NgModule } from "@angular/core";
import { SvgIconComponent } from "./svg-icon/svg-icon.component";
import { InputComponent } from "./input/input.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./button/button.component";
import { SvgDefinitionsComponent } from "./svg-definitions/svg-definitions.component";
import { AvatarComponent } from "./avatar/avatar.component";

const JiraControlComponents = [
    SvgIconComponent,
    InputComponent,
    ButtonComponent,
    SvgDefinitionsComponent,
    AvatarComponent
]
@NgModule({
    declarations: [JiraControlComponents],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [JiraControlComponents]
})
export class JiraControlModule {
}