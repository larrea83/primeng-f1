import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';

@Injectable()
export class LabelService extends BaseService {

    constructor(private _http: Http) { 
        super(_http);
    }

    getLabels(): Observable<any> {

        return Observable.of({
            "BASE": {
                "IDIOM": "Qué hablas?:",
                "MENU": "De tó",
                "DRIVERS": "Kamikaces",
                "CONSTRUCTORS": "Chatarreros",
                "CIRCUITS": "Caminos"
            }
        }
        );
    /*
        return this._http
            .get(Constants.DRIVERS_ENDPOINT + Constants.JSON_EXTENSION)
            .map((response: Response) => <Driver[]>response.json().MRData.DriverTable.Drivers)
            //.do(data => console.log(data))
            .catch(this.handleError);
    */
    }
}