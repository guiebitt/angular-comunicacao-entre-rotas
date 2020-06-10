import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../../core/entities/produto.entity';
import { ProdutoService } from './../../core/services/produto.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  model: Produto;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.model = Produto.novoProduto();
  }

  salvar(produto: Produto) {
    this.produtoService.post(produto).subscribe(() => this.voltar(produto));
  }

  voltar(produto?: Produto) {
    this.router.navigate(['./../'], {
      relativeTo: this.activatedRoute,
      state: {
        produtoIncluido: produto
      }
    });
  }
}
