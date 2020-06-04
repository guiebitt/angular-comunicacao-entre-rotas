import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EditarComponent } from './../../clientes/editar/editar.component';
import { ClienteService } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteEditarResolver implements Resolve<EditarComponent> {

  constructor(private readonly clienteService: ClienteService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.clienteService.getById(route.paramMap.get('id'));
  }
}
