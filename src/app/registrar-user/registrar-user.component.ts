import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrarUserService } from './registrar-userService';
import { AlertsService } from 'src/app/shared/alerts.service';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { validarQueSeanIguales } from './validator';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {

  newUser: FormGroup;
  token;
  @ViewChild('email', { static: true }) emailInput: ElementRef;

  constructor(
    private router: Router,
    private service: RegistrarUserService,
    private alerts: AlertsService,
  ) {
    this.initFormGroup();
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('access_token');
    if (this.token === null) {
      this.token = false;
    }
  }

  initFormGroup(): void {
    this.newUser = new FormGroup({
      nombre: new FormControl('', Validators.required),
      numeroId: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      departamento: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      barrio: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required),
      otrosIngresos: new FormControl('', Validators.required),
      gastosMensuales: new FormControl('', Validators.required),
      gastosFinancieros: new FormControl('', Validators.required),

    }, {
      validators: validarQueSeanIguales
    });
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

  submit(): void {
    this.alerts.waitingAlert('Creando usuraio...');
    this.service.addUser(this.newUser.value)
      .then(ans => {
        if (ans) {
          this.alerts.closeAlertNoMSG();
          this.router.navigate(['/personal']);
        } else {
          console.warn(ans);
          this.alerts.failAlert('error en el servidor al intentar guardar el usuario');
        }
      }).catch(err => {
        this.alerts.failAlert('Error al crear usuario, intente más tarde');
        console.warn(err);
      });
  }

  checarSiSonIguales(): boolean {
    return this.newUser.hasError('noSonIguales') &&
      this.newUser.get('password').dirty &&
      this.newUser.get('passwordConfirm').dirty;
  }
}
