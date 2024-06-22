import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  constructor(private usersService: UsersService) {}

  confirmPassword: string = '';
  isMissMatchingPassrowds: boolean = false;

  missingFields: boolean = false;
  fillAllFields: string = '';

  errorMessage: string = '';



  newUser: User = {
    name: '',
    age: NaN,
    email: '',
    password: ''
  };

  placeHolder = {
    name: 'Nombre',
    age: 'Edad',
    email: 'Email',
    password: 'Contraseña',
    confirmPassword: 'Repite la contraseña',
    submit: 'Registrarme!'
  };


  missMatchingPassrowds(controlPassword: Event) {
    this.isMissMatchingPassrowds =
      this.newUser.password !== (controlPassword.target as HTMLInputElement).value
  }

  validateAttributes(): boolean {

    return (this.newUser.name === ''
      || Number.isNaN(this.newUser.age)
      || this.newUser.email === ''
      || this.newUser.password === ''
      || this.newUser.password === ''
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

    if (this.newUser.password !== this.confirmPassword) {
      this.missingFields = true;
      this.confirmPassword = '';
      return;
    }

    console.log(JSON.stringify(this.newUser));

    const response = this.usersService.register(this.newUser);
    console.log(response);

    if (response.includes('Usuario registrado:')) {
      this.errorMessage = '¡Te registraste con éxito!';
      this.resetForm();
    } else {
      this.errorMessage = response;
    }
  }

  resetForm() {
    this.newUser = {
      name: '',
      age: NaN,
      email: '',
      password: ''
    }
    this.confirmPassword = '';
  }

}
