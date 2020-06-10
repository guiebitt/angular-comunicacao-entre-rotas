import { NgModule } from '@angular/core';
import { CoreModule } from './../core/core.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { IncluirComponent } from './incluir/incluir.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    IncluirComponent
  ],
  imports: [
    ProdutosRoutingModule,
    CoreModule
  ]
})
export class ProdutosModule { }
