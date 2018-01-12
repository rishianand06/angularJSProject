import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private token: string = null;
    private baseUrl: string = "http://localhost:3500/login";

    constructor(private http: Http) { }

    public authenticate(username: string, password: string): Observable<boolean> {

        let ourheaders: Headers = new Headers({ "Content-Type": "application/json" });

        let requestOptions: RequestOptions = new RequestOptions({ headers: ourheaders });

        return this.http.post(this.baseUrl, { name: username, password: password }, requestOptions)
            .map((response) => {
                let data = response.json();
                this.token = data.token;
                console.log(this.token);
                return data.success;
            });
    }

    public get authenticated(): boolean {
        return this.token != null;
    }

    public logout(): void {
        this.token = null;
    }
}
