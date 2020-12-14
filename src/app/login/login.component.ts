import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { SnackBarService } from '../shared/snack-bar.service';
import { Router } from '@angular/router';
import { LoginService } from './loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  checkEmail = false;
  logged = true;

  @ViewChild('email', { static: true }) emailInput: ElementRef;
  constructor(
    private snackBar: SnackBarService,
    private route: Router,
    private service: LoginService,
  ) { }

  ngOnInit(): void {
    this.initLogin();
  }

  emailValidator(email: string): boolean {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
    if (re) {
      return true;
    } else {
      return false;
    }
  }

  inputEventConfig(): void {
    fromEvent(this.emailInput.nativeElement, 'change').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(res => this.emailValidator(res)),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe();
  }

  initLogin(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
    });
  }

  async onSubmit(value): Promise<any> {
    try {
      if (value !== undefined) {
        if (this.loginForm.valid) {
          const respuesta = await this.service.login(value);
          if (respuesta.token) {
            localStorage.setItem('access_token', respuesta.token);
            this.route.navigate(['/registrarUser']);
          } else {
            this.snackBar.openSnackBar('No puede ingresar, revise sus datos', 'Error', 3000);
          }
        }
      }
    } catch (error) {
      this.snackBar.openSnackBar('No puede ingresar, revise sus datos', 'Error', 3000);
    }

  }

}
