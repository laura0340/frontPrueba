import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppServices {

    constructor(private http: HttpClient) { }

    getInfoUser(): Promise<any> {
        return this.http.get(
            environment.api + '/getUsers',
            {}
        ).toPromise();
    }

    deleteItem(idItem: number): Promise<any> {
        return this.http.delete(
            environment.api + `/delete/${idItem}`,
            {}
        ).toPromise();
    }

}
