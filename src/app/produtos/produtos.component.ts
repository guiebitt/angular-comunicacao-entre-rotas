import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoPageAction, PoPageFilter, PoTableAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IApiCollection } from '../core/entities/api-collection.interface';
import { Produto } from '../core/entities/produto.entity';
import { IProduto } from '../core/entities/produto.interface';
import { ProdutoService } from '../core/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  filtroRapido: string;
  produtoIncluido: Produto;

  get produtos(): Observable<IApiCollection<IProduto>> {
    return this.produtoService.produtos.asObservable();
  }

  readonly filtroPagina: PoPageFilter = {
    ngModel: 'filtroRapido',
    action: () => this.produtoService.getAll(this.filtroRapido).subscribe()
  };

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
    private readonly produtoService: ProdutoService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.produtoIncluido = navigation.extras.state ? navigation.extras.state.produtoIncluido : undefined;
  }

  ngOnInit(): void {
    this.filtroRapido = this.activatedRoute.snapshot.data.filtroRapido;
  }

  incluir() {
    this.router.navigate(['incluir'], {
      relativeTo: this.activatedRoute
    });
  }

  editar(produto: IProduto) {
    this.router.navigate([produto.id], {
      relativeTo: this.activatedRoute
    });
  }

  excluir(produto: IProduto) {
    this.produtoService.delete(produto).pipe(
      switchMap(() => this.produtoService.getAll())
    ).subscribe();
  }
}
