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

  user: User | undefined;
  loginAttempted: boolean = false;
  loginSuccessful: boolean = false;

  email: string = '';
  password: string = '';

  login() {
    console.log("email" + this.email + "password" + this.password);
    this.loginAttempted = true;
    this.user = this.usersService.logIn(this.email, this.password);
    console.log(this.user);

    if (this.user) {
      this.loginSuccessful = true;
    }
  }

  keyPress($event: KeyboardEvent) {
    console.log($event.key);
    console.log(this.email);
    }

    clog() {
      console.log("hola")
    }

}
