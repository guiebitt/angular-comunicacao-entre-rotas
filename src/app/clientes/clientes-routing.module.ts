import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteEditarResolver } from '../core/services/cliente-editar.resolve';
import { ClienteGetAllResolver } from './../core/services/cliente-get-all.resolve';
import { ClientesComponent } from './clientes.component';
import { EditarComponent } from './editar/editar.component';
import { IncluirComponent } from './incluir/incluir.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    resolve: {
      clientes: ClienteGetAllResolver
    }
  },
  {
    path: 'incluir',
    component: IncluirComponent
  },
  {
    path: ':id',
    component: EditarComponent,
    resolve: {
      cliente: ClienteEditarResolver
    }
  },
  {
    path: '**',
    redirectTo: '/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
