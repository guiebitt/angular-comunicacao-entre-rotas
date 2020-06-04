import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { EditarComponent } from './editar/editar.component';
import { IncluirComponent } from './incluir/incluir.component';

@NgModule({
  declarations: [ClientesComponent, EditarComponent, IncluirComponent],
  imports: [
    FormsModule,
    CommonModule,
    ClientesRoutingModule,
    CoreModule
  ]
})
export class ClientesModule { }
