import { EventEmitter, Injectable, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    
    languageChange: string;
    @Output() $languageChange: EventEmitter<string>;
    translate: TranslateService;

    constructor(private trans: TranslateService) {
        this.$languageChange = new EventEmitter<string>();
        this.translate = trans;
    }

    configureLanguageService(availableLang:Array<string>, defaultLang){
        this.translate.addLangs(availableLang);
        this.translate.setDefaultLang(defaultLang);
        /*
        let browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
        */
    }

    onLanguageChange(language: string){
        this.translate.use(language);
        this.languageChange = language;
        this.$languageChange.emit(this.languageChange);
    }

    getActiveLanguage(): string {
        return this.languageChange;
    }
}