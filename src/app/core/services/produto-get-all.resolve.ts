import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProdutosComponent } from '../../produtos/produtos.component';
import { ProdutoService } from './produto.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoGetAllResolver implements Resolve<ProdutosComponent> {

  constructor(private readonly produtoService: ProdutoService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const filtroRapido = route.queryParamMap.get('filtroRapido');
    return this.produtoService.getAll(filtroRapido).pipe(map(() => filtroRapido));
  }
}
