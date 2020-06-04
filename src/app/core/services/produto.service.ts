import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { emptyApiCollection, IApiCollection } from '../entities/api-collection.interface';
import { IProduto } from '../entities/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  readonly url = 'http://localhost:8180/api/produtos';

  produtos = new ReplaySubject<IApiCollection<IProduto>>(1);

  private readonly cabecalhoComLoading: HttpHeaders = new HttpHeaders({ 'X-PO-Screen-Lock': 'true' });

  constructor(private readonly http: HttpClient) { }

  getAll(filtroRapido?: string): Observable<IApiCollection<IProduto>> {
    const url = `${this.url}${filtroRapido ? `?filtroRapido=${filtroRapido}` : ''}`;
    return this.http.get<IApiCollection<IProduto>>(url, {
      headers: this.cabecalhoComLoading
    }).pipe(
      map(produtos => {
        this.produtos.next(produtos);
        return produtos;
      }),
      catchError(() => {
        this.produtos.next(emptyApiCollection<IProduto>());
        return of(emptyApiCollection<IProduto>());
      })
    );
  }

  getById(id: string): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.url}/${id}`, {
      headers: this.cabecalhoComLoading
    });
  }

  post(produto: IProduto): Observable<void> {
    return this.http.post<void>(this.url, produto, {
      headers: this.cabecalhoComLoading
    });
  }

  put(produto: IProduto): Observable<void> {
    return this.http.put<void>(`${this.url}/${produto.id}`, produto, {
      headers: this.cabecalhoComLoading
    });
  }

  delete(produto: IProduto): Observable<void> {
    return this.http.delete<void>(`${this.url}/${produto.id}`, {
      headers: this.cabecalhoComLoading
    });
  }
}
