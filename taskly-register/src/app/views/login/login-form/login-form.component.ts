import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './login-form.component.html',
  styles: ``
})
export class LoginFormComponent {
}
