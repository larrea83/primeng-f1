import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Constants } from '../../utils/constants.utils';
import { MenuItem } from 'primeng/primeng';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  @Output()
  onLanguageChange: EventEmitter<any>;
  languageService: LanguageService;
  menuItems: MenuItem[];
  languageSubscription: Subscription;

  constructor(public translate: TranslateService, public languageSrv: LanguageService) {
    this.languageService = languageSrv;
    this.languageService.configureLanguageService(['en', 'es'], Constants.DEFAULT_LANGUAGE);
    this.onLanguageChange = this.languageService.$languageChange;

    //subscribe to the language service emit
    this.languageSubscription = this.languageService.$languageChange.subscribe(newLanguage => {
      this.setMenuDropDownList();
    });
  }

  ngOnInit() {
    this.setMenuDropDownList();
  }
  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }

  languageChanged(langSelect: string) {
    //mark the language change
    this.languageService.onLanguageChange(langSelect);
  }


  /**
   * 
   */
  setMenuDropDownList() {
    this.menuItems = [];
    this.translate.get("BASE.DRIVERS").subscribe(
      translation => {
        this.menuItems.push({ label: translation, icon: 'fa-plus', routerLink: '/drivers' })
      }
    );
    this.translate.get("BASE.CONSTRUCTORS").subscribe(
      translation => {
        this.menuItems.push({ label: translation, icon: 'fa-download' })
      }
    );
    this.translate.get("BASE.CIRCUITS").subscribe(
      translation => {
        this.menuItems.push({ label: translation, icon: 'fa-refresh' })
      }
    );
  }
}