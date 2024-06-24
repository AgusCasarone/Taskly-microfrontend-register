import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';
import { LoginFormComponent } from './views/login/login-form/login-form.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent
      },
      {
        path: 'login',
        loadComponent: () => import('./views/login/login-form/login-form.component')
        .then(m => m.LoginFormComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./views/register/register-form/register-form.component')
        .then(m => m.RegisterFormComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./views/forgot-password/forgot-password/forgot-password.component')
        .then(m => m.ForgotPasswordComponent)
      }
    ]
  },


];
