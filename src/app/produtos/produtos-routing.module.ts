import { IncluirComponent } from './incluir/incluir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoGetAllResolver } from '../core/services/produto-get-all.resolve';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    resolve: {
      filtroRapido: ProdutoGetAllResolver
    }
  },
  {
    path: 'incluir',
    component: IncluirComponent
  },
  {
    path: '**',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
