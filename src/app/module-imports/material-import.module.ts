//import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdToolbarRow, MdSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';

import {MenuModule,MenuItem,ButtonModule,DropdownModule,DataTableModule,SharedModule,DialogModule} from 'primeng/primeng'; 

@NgModule({
  imports: [MenuModule,ButtonModule,DropdownModule,DataTableModule,SharedModule,DialogModule],
  exports: [MenuModule,ButtonModule,DropdownModule,DataTableModule,SharedModule,DialogModule],
})
export class MaterialImportsModule { }