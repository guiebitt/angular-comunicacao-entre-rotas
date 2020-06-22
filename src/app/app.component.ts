import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';
import { LoginFakeService } from './core/services/login-fake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Início',
      shortLabel: 'Início',
      icon: 'po-icon-home',
      link: '/'
    },
    {
      label: 'Clientes',
      shortLabel: 'Clientes',
      icon: 'po-icon-users',
      link: '/clientes'
    },
    {
      label: 'Produtos',
      shortLabel: 'Produtos',
      icon: 'po-icon-cart',
      link: '/produtos'
    },
    {
      label: 'Sair',
      shortLabel: 'Sair',
      icon: 'po-icon-exit',
      action: () => {
        this.loginService.logout();
        this.router.navigate(['login']);
      }
    }
  ];

  constructor(
    public loginService: LoginFakeService,
    private readonly router: Router
  ) { }



}
