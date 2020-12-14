import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  sucessAlert(msg: string): void {
    Swal.close();
    Swal.fire({
      icon: 'success',
      title: msg
    });
  }

  confirmAlert(msg: string, buttonConfirmText: string, buttonCancelText?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      Swal.fire({
        titleText: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: ' #2d323e',
        cancelButtonColor: '#d33',
        confirmButtonText: buttonConfirmText,
        cancelButtonText: buttonCancelText ? buttonCancelText : 'Cancelar',
      }).then((result) => {
        if (result.value) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  failAlert(msg: string): void {
    Swal.close();
    Swal.fire({
      icon: 'error',
      title: msg
    });
  }

  

  waitingAlert(msg: string): void {
    Swal.fire({
      icon: 'warning',
      titleText: msg,
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
  }

  closeAlertNoMSG(): void {
    Swal.close();
  }

  errorRequest(msg): void {
    this.failAlert('Fallo en la petición al servidor');
    console.warn(msg);
  }
}