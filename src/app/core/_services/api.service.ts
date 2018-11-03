import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

class ApiError {
    constructor(public status: number, public type: string, public message: string, public body: any) {
    }
}

@Injectable()
export class ApiService {
    private url = environment.api;
    private headers = new HttpHeaders({'Content-type': 'application/json'});
    private options = {
        headers: this.headers,
        params: new HttpParams()
    };

    constructor(private http: HttpClient, private toastr: ToastrService) {

    }

    getJson(path) {
        return this.http.get(`${path}`).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    post(path, data) {
        return this.http.post(`${this.url + path}`, data).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    get(path) {
        return this.http.get(`${this.url + path}`).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    jsonGet(path) {
        return this.http.get(path, this.options).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    delete(path) {
        return this.http.delete(`${this.url + path}`, this.options).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    put(path, data) {
        return this.http.put(`${this.url + path}`, data, this.options).pipe(
            catchError(err => this.handleErrors(err))
        ).toPromise();
    }

    handleErrors(err) {
        switch (err.status) {
            case 400: {
                break;
            }
            case 401: {
                break;
            }
            case 403 : {
                this.toastr.error('You are not allowed to perform this action', 'Permission error');
                break;
            }
            case 500: {
                break;
            }
        }
        return throwError(
            new ApiError(
                err.status,
                err.error && err.error.type || err.name,
                err.error && err.error.message || err.statusText,
                err.error.errors
            )
        );
    }
}
