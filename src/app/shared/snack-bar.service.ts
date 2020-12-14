import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  // tslint:disable-next-line: variable-name
  constructor( private _snackBar: MatSnackBar ) { }

  openSnackBar(message: string, action: string, duration: number ): void {
    this._snackBar.open(message, action, {
      duration,
      // verticalPosition: 'bottom',
      verticalPosition: 'bottom' as MatSnackBarVerticalPosition,
      horizontalPosition: 'center' ,
      panelClass: ['snak'],

    });
  }
}
