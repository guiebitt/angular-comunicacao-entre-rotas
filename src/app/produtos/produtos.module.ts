import { NgModule } from '@angular/core';
import { CoreModule } from './../core/core.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    ProdutosRoutingModule,
    CoreModule
  ]
})
export class ProdutosModule { }
