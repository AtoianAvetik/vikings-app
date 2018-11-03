import {throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfig {
    private apiUrl: string = null;

    constructor(private http: HttpClient) {}

    public getApiUrl() {
        return this.apiUrl;
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('./assets/config.json').pipe(
                map( res => res ),
                catchError(err => {
                    console.log("Configuration file 'config.json' could not be read");
                    resolve(true);
                    return observableThrowError(err.json() || 'Server error');
                }),)
                .subscribe(config => {
                    if (config['apiUrl'] == null) {
                        console.log('Cannot find apiUrl inside configuration file');
                        resolve(true);
                    } else {
                        this.apiUrl = config['apiUrl'];
                        resolve(true);
                    }
                });
        });
    }
}
