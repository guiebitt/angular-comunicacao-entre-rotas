import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesComponent } from './../../clientes/clientes.component';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteGetAllResolver implements Resolve<ClientesComponent> {

  constructor(private readonly clienteService: ClienteService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.clienteService.getAll();
  }
}
