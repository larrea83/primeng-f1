import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DriverService } from '../../services/driver.service';
import { LanguageService } from '../../services/language.service';
import { SelectItem } from 'primeng/primeng';
import { Constants } from '../../utils/constants.utils';
import { Driver } from '../../model/driver';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit, OnDestroy {
  selectedSeason: string;
  seasonYears: SelectItem[];
  driverList: Driver[];
  selectedDriver: Driver;
  cols: any[];
  languageSubscription: Subscription;
  displayDriverDetails:boolean;

  constructor(public translate: TranslateService, public languageService: LanguageService, public driverService: DriverService) {
    //subscribe to the language service emit
    this.languageSubscription = this.languageService.$languageChange.subscribe(newLanguage => {
      this.setGridHeader();
    });
  }

  ngOnInit() {
    this.seasonYears = Constants.YEARS;
    this.setGridHeader();
    this.displayDriverDetails = false;
  }
  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  setGridHeader(): void {
    let driverHeaders = this.translate.get(["DRIVER.CODE", "DRIVER.NAME", "DRIVER.SURNAME", "DRIVER.NUMBER", "DRIVER.NATIONALITY", "DRIVER.BIRTHDATE"]).subscribe(array => {
      this.cols = [
        { field: 'code', header: array["DRIVER.CODE"] },
        { field: 'givenName', header: array["DRIVER.NAME"] },
        { field: 'familyName', header: array["DRIVER.SURNAME"] },
        { field: 'permanentNumber', header: array["DRIVER.NUMBER"], sortable: true },
        { field: 'nationality', header: array["DRIVER.NATIONALITY"] },
        { field: 'dateOfBirth', header: array["DRIVER.BIRTHDATE"], sortable: true }
      ];
    });
  }

  onDriveSelect(driver: Driver) {
    console.log(this.selectedDriver);
    this.displayDriverDetails = true;
  }

  onDriveUnselect(event) {
    this.displayDriverDetails = false;
  }

  seasonSelected(): void {
    if (this.selectedSeason) {
      this.driverService.getDriverBySeason(this.selectedSeason).subscribe(
        result => {
          this.driverList = result;
        })
    }
    else {
      this.driverList = [];
    }
  }
}