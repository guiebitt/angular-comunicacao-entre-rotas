import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../core/entities/cliente.entity';
import { ClienteService } from '../../core/services/cliente.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  model: Cliente;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.model = Cliente.novoCliente();
  }

  salvar(cliente: Cliente) {
    this.clienteService.post(cliente).subscribe(() => this.voltar());
  }

  voltar() {
    this.router.navigate(['./../'], {
      relativeTo: this.activatedRoute
    });
  }
}
