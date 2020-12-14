import { Component, Input, OnInit } from '@angular/core';
import { AppServices } from '../shared/appservice';
import { AlertsService } from 'src/app/shared/alerts.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  listUsuarios = [];
  token;

  constructor(
    private service: AppServices,
    private alerts: AlertsService,
  ) { }

  ngOnInit(): void {
    this.loadInfo();
    this.token = localStorage.getItem('access_token');
    if (this.token === null) {
      this.token = false;

    }
    console.log('thistokren', this.token);
  }

  async loadInfo(): Promise<void> {
    this.service.getInfoUser()
      .then(res => {
        this.listUsuarios = res;
      });
  }

  deleteItem(item): void {
    this.alerts.confirmAlert(`¿Seguro quiere borrar el siguiente usuario?: ${item.nombre} `, 'Borrar', 'Cancelar')
      .then(ansDialog => {
        if (ansDialog) {
          this.alerts.waitingAlert('Borrando, por favor espere');
          this.service.deleteItem(item.id).then(resp => {
            if (resp) {
              this.alerts.sucessAlert('Registro borrado exitosamente!');
              this.loadInfo();
            } else {
              this.alerts.failAlert('Fallo al intentar borrar usuario, intente mas tarde');
            }
          }).catch(err => {
            this.alerts.failAlert('Fallo al intentar borrar, intente mas tarde');
            console.warn(err);
          });
        }
      });
  }

}
