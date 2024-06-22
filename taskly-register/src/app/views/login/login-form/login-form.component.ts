import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterModule,
    CommonModule
  ],
  templateUrl: './login-form.component.html',
  styles: ``
})
export class LoginFormComponent {

  constructor(private usersService: UsersService) {}

  email: string = '';
  password: string = '';

login() {
  console.log(this.usersService.logIn(this.email, this.password));
}

}
