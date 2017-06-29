import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BaseService } from './base.service';
import { Driver } from '../model/driver';
import { Constants } from '../utils/constants.utils';

@Injectable()
export class DriverService extends BaseService {

  constructor(public http: Http) {
    super(http);
  }


  public getDriverBySeason(seasonYear:string):Observable<Driver[]> {
      return this.http.get(Constants.BASE_URL + '/' + seasonYear + Constants.DRIVER_TAG + Constants.JSON_ENDING).map(
          response => {
              return response.json().MRData.DriverTable.Drivers;
          }
      )
  }

  public getDrivers():Observable<Driver[]> {
      return this.http.get(Constants.BASE_URL + Constants.DRIVER_TAG + Constants.JSON_ENDING).map(
          response => {
              return response.json().MRData.DriverTable.Drivers;
          }
      )
  }

}