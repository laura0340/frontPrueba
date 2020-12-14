import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancieroComponent } from '../app/financiero/financiero.component';
import { LoginComponent } from '../app/login/login.component';
import { PersonalComponent } from '../app/personal/personal.component';
import { ResidenciaComponent } from '../app/residencia/residencia.component';
import { RegistrarUserComponent } from '../app/registrar-user/registrar-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'financiero', component: FinancieroComponent },
  { path: 'residencia', component: ResidenciaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'registrarUser', component: RegistrarUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
