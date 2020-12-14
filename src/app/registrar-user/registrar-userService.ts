import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RegistrarUserService {

    constructor(private http: HttpClient) { }

    addUser(data): Promise<any> {
        return this.http.post(
            environment.api + '/registrar',
            {
                email: data.email,
                password: data.password,
                nombre: data.nombre,
                numeroId: data.numeroId,
                celular: data.celular,
                departamento: data.departamento,
                ciudad: data.ciudad,
                barrio: data.barrio,
                direccion: data.direccion,
                salario: data.salario,
                otrosIngresos: data.otrosIngresos,
                gastosMensuales: data.gastosMensuales,
                gastosFinancieros: data.gastosFinancieros
            }
        ).toPromise();
    }

}
