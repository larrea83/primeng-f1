import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class CasenetMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        //console.log(params);
        return 'key ' + params.key + ' does not exist';
    }
}