import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { emptyApiCollection, IApiCollection } from '../entities/api-collection.interface';
import { ICliente } from './../entities/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly url = 'http://localhost:8180/api/clientes';

  clientes = new ReplaySubject<IApiCollection<ICliente>>(1);

  private readonly cabecalhoComLoading: HttpHeaders = new HttpHeaders({ 'X-PO-Screen-Lock': 'true' });

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<IApiCollection<ICliente>> {
    return this.http.get<IApiCollection<ICliente>>(this.url, {
      headers: this.cabecalhoComLoading
    }).pipe(
      map(clientes => {
        this.clientes.next(clientes);
        return clientes;
      }),
      catchError(() => {
        this.clientes.next(emptyApiCollection<ICliente>());
        return of(emptyApiCollection<ICliente>());
      })
    );
  }

  getById(id: string): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.url}/${id}`, {
      headers: this.cabecalhoComLoading
    });
  }

  post(cliente: ICliente): Observable<void> {
    return this.http.post<void>(this.url, cliente, {
      headers: this.cabecalhoComLoading
    });
  }

  put(cliente: ICliente): Observable<void> {
    return this.http.put<void>(`${this.url}/${cliente.id}`, cliente, {
      headers: this.cabecalhoComLoading
    });
  }

  delete(cliente: ICliente): Observable<void> {
    return this.http.delete<void>(`${this.url}/${cliente.id}`, {
      headers: this.cabecalhoComLoading
    });
  }
}
