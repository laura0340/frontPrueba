import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { LoginService } from './login/loginService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  showMenu = false;
  title = 'frontPrueba';
  logged = true;

  constructor(
    private route: Router,
    private authService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.initComponent();
  }

  initComponent(): void {
  }

  // check(): boolean {
  //   return this.logged ? true : false;
  // }

}
