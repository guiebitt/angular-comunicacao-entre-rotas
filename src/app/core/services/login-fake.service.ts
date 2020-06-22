import { Injectable } from '@angular/core';
import { PerfilEnum } from '../entities/perfil.enum';
import { IUsuario } from './../entities/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginFakeService {

  usuarioEstaAutenticado = false;
  usuario: IUsuario = undefined;

  constructor() { }

  login(usuario: string, senha: string): boolean {
    if (usuario === 'produto' && senha === 'produto') {
      this.usuario = {
        perfis: [PerfilEnum.GESTOR_PRODUTO]
      };
      this.usuarioEstaAutenticado = true;
    } else if (usuario === 'cliente' && senha === 'cliente') {
      this.usuario = {
        perfis: [PerfilEnum.GESTOR_CLIENTE]
      };
      this.usuarioEstaAutenticado = true;
    } else if (usuario === 'admin' && senha === 'admin') {
      this.usuario = {
        perfis: [PerfilEnum.ADMINISTRADOR]
      };
      this.usuarioEstaAutenticado = true;
    }
    return this.usuarioEstaAutenticado;
  }

  logout() {
    this.usuario = undefined;
    this.usuarioEstaAutenticado = false;
  }
}
