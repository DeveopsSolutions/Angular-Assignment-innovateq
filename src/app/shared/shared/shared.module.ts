import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import { TableDataComponent } from './components/table-data/table-data.component'
import {DataPropertyGetterPipePipe} from '../../shared/pipes/data-property-getter-pipe.pipe';
@NgModule({
  declarations: [
    TableDataComponent,
    DataPropertyGetterPipePipe,
    DataPropertyGetterPipePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    TableDataComponent,
    DataPropertyGetterPipePipe
  ]
})
export class SharedModule { }
