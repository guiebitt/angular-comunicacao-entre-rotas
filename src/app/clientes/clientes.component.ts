import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IApiCollection } from '../core/entities/api-collection.interface';
import { ICliente } from '../core/entities/cliente.interface';
import { ClienteService } from '../core/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  get clientes(): Observable<IApiCollection<ICliente>> {
    return this.clienteService.clientes.asObservable();
  }

  readonly acoesPagina: PoPageAction[] = [
    {
      label: 'Incluir',
      icon: 'po-icon-new',
      action: this.incluir.bind(this)
    },
  ];

  readonly acoes: PoTableAction[] = [
    {
      label: 'Editar',
      icon: 'po-icon-edit',
      action: this.editar.bind(this)
    },
    {
      label: 'Excluir',
      icon: 'po-icon-delete',
      action: this.excluir.bind(this)
    }
  ];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly clienteService: ClienteService
  ) { }

  ngOnInit(): void { }

  incluir() {
    this.router.navigate(['incluir'], {
      relativeTo: this.activatedRoute
    });
  }

  editar(cliente: ICliente) {
    this.router.navigate([cliente.id], {
      relativeTo: this.activatedRoute
    });
  }

  excluir(cliente: ICliente) {
    this.clienteService.delete(cliente).pipe(
      switchMap(() => this.clienteService.getAll())
    ).subscribe();
  }
}
