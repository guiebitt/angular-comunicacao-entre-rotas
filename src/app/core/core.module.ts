import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  exports: [
    PoModule,
    CommonModule,
    FormsModule
  ]
})
export class CoreModule { }
