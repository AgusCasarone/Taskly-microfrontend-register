import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';

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
  isMissMatchingPassrowds: boolean = false;

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
    if (this.newUser.password !== (controlPassword.target as HTMLInputElement).value) {
      this.isMissMatchingPassrowds = true;
    }
  }

  register() {
    this.usersService.register(this.newUser);
  }

}
