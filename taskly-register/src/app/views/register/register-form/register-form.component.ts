import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  constructor(private usersService: UsersService) {}

  confirmPassword: string = '';

  newUser = {
    name: '',
    age: null,
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

  // TODO create user
  // register() {
  //   this.usersService.register(this.newUser);
  // }

}
