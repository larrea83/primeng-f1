import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Driver } from '../model/driver';
import { Constants } from '../utils/constants.utils';
import { BaseService } from './base.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DriverService  {

    constructor(private _http: Http) {  }

    /**
     * 
     */
    getDrivers(): Observable<Driver[]> {
        return this._http
            .get(Constants.DRIVERS_ENDPOINT + Constants.JSON_EXTENSION)
            .map((response: Response) => <Driver[]>response.json().MRData.DriverTable.Drivers)
            //.do(data => console.log(data))
            .catch(this.handleError);
    }

    /**
     * 
     * @param year 
     */
    getDriverBySeason(year:string): Observable<Driver[]> {
        return this._http
            .get(Constants.BASE_ENDPOINT + '/' + year + Constants.DRIVER_TAG + Constants.JSON_EXTENSION)
            .map((response: Response) => <Driver[]>response.json().MRData.DriverTable.Drivers)
            //.do(data => console.log(data))
            .catch(this.handleError);
    }

    /**
     * 
     * @param error 
     */
    public handleError(error: Response) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }
}