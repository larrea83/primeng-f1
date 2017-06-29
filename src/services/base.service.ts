import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Base } from '../model/base';

@Injectable()
export class BaseService {

    headers: any;

    constructor(public http: Http) { }

    public getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}