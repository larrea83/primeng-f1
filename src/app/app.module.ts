import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// material
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import { MaterialImportsModule } from './module-imports/material-import.module';

// http
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

// i18n
import {TranslateModule, TranslateLoader, MissingTranslationHandler} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { CasenetTranslationLoader } from '../internationalization/casenet-translation-loader';
import { CasenetMissingTranslationHandler } from '../internationalization/casenet-missing-translation';

// router
import { RouterModule } from '@angular/router';
import { routes } from './routing';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

// services
import { LanguageService } from '../services/language.service';
import { DriverService } from '../services/driver.service';

// components
import { BaseComponent } from './base/base.component';
import { DriverComponent } from './driver/driver.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DriverComponent,
    DriverDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialImportsModule,
    TranslateModule.forRoot({
      /*
        loader: { provide: TranslateLoader, useClass: CasenetTranslationLoader},
          missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CasenetMissingTranslationHandler}
      */
        loader: {
          provide: TranslateLoader
          ,useFactory: HttpLoaderFactory
          ,deps: [Http]
        }
        
        ,missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CasenetMissingTranslationHandler}
        
      })
  ],
  providers: [LanguageService, DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
