import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { PerfilEnum } from './../entities/perfil.enum';
import { LoginFakeService } from './../services/login-fake.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoGuard implements CanActivate {

  constructor(
    private readonly loginService: LoginFakeService,
    private readonly notificacaoService: PoNotificationService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const perfisNecessarios = route.data && route.data.perfis ? route.data.perfis as PerfilEnum[] : [];
    let possuiPermissao = false;

    // Quando não definido um perfil específico, então é porque não restringe
    if (perfisNecessarios.length === 0) {
      return true;
    } else {
      possuiPermissao = this.loginService.usuario.perfis.some(
        perfil => perfisNecessarios.some(perfilNecessario => perfilNecessario === perfil)
      );
    }

    if (possuiPermissao) {
      return true;
    } else {
      this.notificacaoService.error('O usuário não possui permissão para acesso nesta rota');
    }
  }
}
