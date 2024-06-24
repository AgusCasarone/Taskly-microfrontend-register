import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { PasswordInputComponent } from "../../../utils/inputs/password-input/password-input.component";

@Component({
    selector: 'login',
    standalone: true,
    templateUrl: './login-form.component.html',
    styles: ``,
    imports: [
        FormsModule,
        RouterLink,
        RouterModule,
        CommonModule,
        PasswordInputComponent
    ]
})
export class LoginFormComponent implements OnInit {

  user: User | undefined;
  loginAttempted: boolean = false;
  loginSuccessful: boolean = false;
  rememberMe: boolean = false;

  email: string = '';
  password: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
  }

  isUserRemembered() {
    const rememberedEmail = localStorage.getItem('email');
    const rememberedPassword = localStorage.getItem('password');

    if (rememberedEmail && rememberedPassword) {
      this.email = rememberedEmail;
      this.password = rememberedPassword;
      this.rememberMe = true;
    }
  }

  rememberLogin() {
    if (this.rememberMe) {
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberMe');
    }
  }

  login() {
    this.loginAttempted = true;
    this.user = this.usersService.logIn(this.email, this.password);

    this.user ?
      this.loginSuccessful = true : this.loginSuccessful = false;
  }

}
