import { Observable } from 'rxjs/Rx';
import { TranslateLoader } from '@ngx-translate/core';
import { Http, Response } from '@angular/http';
import { LabelService } from '../services/label.service';

export class CasenetTranslationLoader implements TranslateLoader {
    constructor(public http: Http, public labelService:LabelService) { }

    getTranslation(lang: string): Observable<any> {
        return this.labelService.getLabels().map((response:Response) => response);
    }
}