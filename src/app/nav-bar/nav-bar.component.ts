import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IOptionNavigate } from './models/nav-bar.models';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() hideMenu = new EventEmitter<boolean>();

  options: IOptionNavigate[] = [
    {
      name: 'Registro De Usuarios',
      route: '/registrarUser',
      icon: 'insights',
      type: 'item'
    },
    {
      name: 'Datos Personales',
      route: '/personal',
      icon: 'tv',
      type: 'item',
    },
    {
      name: 'Datos Financieros',
      route: '/financiero',
      icon: 'event',
      type: 'item',
    },
    {
      name: 'Datos De Residencia',
      route: '/residencia',
      icon: 'assignment_turned_in',
      type: 'item',
    },
  ];
  suscripcionProfile = new Subscription();
  profile;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  redirect(option: IOptionNavigate): void {
    this.router.navigate([option.route]);
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
