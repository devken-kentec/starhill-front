import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeHoutes: Routes = [
  { path: '',  component: HomeComponent }, //Jeito antigo
  { path: 'list', title: 'Home List', loadComponent: ()=> import('./home-list/home-list.component')}, //com default no nome da class
  { path: 'form', title: 'Home Form', loadComponent: ()=> import('./home-form/home-form.component').then((p)=> p.HomeFormComponent)} //Novo padrão
];
