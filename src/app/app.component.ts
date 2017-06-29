import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[];
  languageSubscription: Subscription;

  constructor(public translate: TranslateService, public languageService:LanguageService){ 
    //subscribe to the language service emit
    /*
    this.languageSubscription = this.languageService.$languageChange.subscribe(newLanguage =>
    {
      this.setMenuDropDownList();
    });
    */
  }

  ngOnInit() { }
  ngOnDestroy() { }
}
