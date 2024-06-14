import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from "../../views/register/register-form/register-form.component";
import { WelcomePageComponent } from "../../views/welcome-page/welcome-page.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    imports: [
        RouterModule,
        RegisterFormComponent,
        WelcomePageComponent
    ]
})
export class MainLayoutComponent {

}
