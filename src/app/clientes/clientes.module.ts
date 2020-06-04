import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { EditarComponent } from './editar/editar.component';
import { IncluirComponent } from './incluir/incluir.component';

@NgModule({
  declarations: [
    ClientesComponent,
    EditarComponent,
    IncluirComponent
  ],
  imports: [
    ClientesRoutingModule,
    CoreModule
  ]
})
export class ClientesModule { }
