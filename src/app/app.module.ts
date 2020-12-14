import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ResidenciaComponent } from './residencia/residencia.component';
import { FinancieroComponent } from './financiero/financiero.component';
import { LoginComponent } from './login/login.component';
// ---------------------------- Material ----------------------------------------------
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';


import { StoreModule } from '@ngrx/store';
import { RegistrarUserComponent } from './registrar-user/registrar-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ResidenciaComponent,
    FinancieroComponent,
    LoginComponent,
    RegistrarUserComponent,
    NavBarComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    StoreModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
