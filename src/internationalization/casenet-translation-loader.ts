import { Observable } from 'rxjs/Rx';
import { TranslateLoader } from '@ngx-translate/core';
import * as fs from 'fs-access';

export class CasenetTranslationLoader implements TranslateLoader {
    constructor() {}

    getTranslation(lang: string): Observable<any> {
        console.log(lang);
        //var fs = require('fs');
        
        return Observable.create(observer => {
            observer.next(JSON.parse(fs.readFileSync(`src/i18n/${lang}.json`, 'utf8')));
            observer.complete();
        });
    }
}