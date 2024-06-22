import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    {
      _id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      password: 'password123',
      age: 14
    },
    {
      _id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      password: 'securepass456',
      age: 34
    },
    {
      _id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      password: 'mypassword789',
      age: 22
    },
    {
      _id: 4,
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      password: 'wonderwoman',
      age: 82
    },
    {
      _id: 5,
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      password: 'imfagent007',
      age: 40
    },
    {
      _id: 6,
      name: 'Agus',
      email: 'agus.casarone@gmail.com',
      password: 'micontraseña',
      age: 40
    },

  ];

  constructor() { }

  register(user: User): string {

    user._id = this.users.reduce((maxId, user) => {
      const currentId = parseInt((user._id ? user._id : 0).toString(), 10);
      return currentId > maxId ? currentId : maxId;
    }, 0);

    if (this.users.find(u => u.email === user.email))
        return "Ya existe un usuario con ese correo electrónico";
    if (this.users.find(u => u.name === user.name))
        return "Ya existe un usuario con ese nombre";

    if (user.password.length < 8)
        return "La contraseña debe tener al menos 8 caracteres";
    if (user.password.length > 16)
        return "La contraseña no puede tener más de 16 caracteres";

    this.users.push(user);

    return "Usuario registrado:\n" + JSON.stringify(user);
  }

  logIn(email: string, password: string): User | undefined {

    return this.users.find(u => u.email === email && u.password === password);

  }

  resetPassword(email: string, name: string, password: string): string {
    const user = this.users.find(u => u.email === email && u.name === name);

    if (user !== undefined) {
      user.password = password;
    }

    return user !== undefined ?
      ("Usuario con nueva contraseña:\n" + JSON.stringify(user)) : "Revisá las credenciales";

  }
}


