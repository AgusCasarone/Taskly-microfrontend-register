import { Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'forgot-password',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  constructor(private usersService: UsersService) {}

  confirmPassword: string = '';
  isMissMatchingPassrowds: boolean = false;

  missingFields: boolean = false;
  fillAllFields: string = '';

  responseMessage: string = '';
  registerSuccessful: boolean = false;

  user: User = {
    name: '',
    age: NaN,
    email: '',
    password: ''
  };

  placeHolder = {
    name: 'Nombre',
    email: 'Email',
    password: 'Contraseña nueva',
    confirmPassword: 'Repite la contraseña',
    submit: 'Recuperar contraseña'
  };


  missMatchingPassrowds(controlPassword: Event) {
    this.isMissMatchingPassrowds =
      this.user.password !== (controlPassword.target as HTMLInputElement).value
  }

  validateAttributes(): boolean {

    return (this.user.name === ''
      || this.user.email === ''
      || this.user.password === ''
      || this.user.password === ''
      || this.confirmPassword === '')
  }

  register() {
    if (this.validateAttributes()) {
      this.missingFields = true;
      this.fillAllFields = 'Debe rellenar todos los campos';
      return;
    } else {
      this.missingFields = false;
      this.fillAllFields = '';
    }

    if (this.user.password !== this.confirmPassword) {
      this.missingFields = true;
      this.confirmPassword = '';
      return;
    }

    const response = this.usersService.resetPassword(this.user.email, this.user.name, this.user.password);

    if (response.includes('Usuario')) {
      this.responseMessage = '¡Recuperaste tu contraseña';
      this.registerSuccessful = true;
      this.resetForm();
      this.resetStatusAfterDelay();
    } else {
      this.responseMessage = response;
    }
  }

  resetForm() {
    this.user = {
      name: '',
      age: NaN,
      email: '',
      password: ''
    }
    this.confirmPassword = '';
  }

  resetStatusAfterDelay() {
    setTimeout(() => {
      this.responseMessage = '';
      this.registerSuccessful = false;
    }, 2500); // 2.5 seconds
  }

}
