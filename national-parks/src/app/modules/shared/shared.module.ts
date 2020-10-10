import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
