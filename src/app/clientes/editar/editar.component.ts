import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './../../core/entities/cliente.entity';
import { ClienteService } from './../../core/services/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  model: Cliente;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.model = this.activatedRoute.snapshot.data.cliente;
    if (!this.model) {
      this.voltar();
    }
  }

  salvar(cliente: Cliente) {
    this.clienteService.put(cliente).subscribe(() => this.voltar());
  }

  voltar() {
    this.router.navigate(['./../'], {
      relativeTo: this.activatedRoute
    });
  }
}
