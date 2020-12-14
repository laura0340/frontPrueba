import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data): Promise<any> {
        return this.http.post(
            environment.api + '/login',
            {
                email: data.userName,
                password: data.password,
            }
        ).toPromise();
    }

}
