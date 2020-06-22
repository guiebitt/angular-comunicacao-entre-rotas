import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageLogin } from '@po-ui/ng-templates';
import { LoginFakeService } from '../core/services/login-fake.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginFakeService,
    private readonly notificationService: PoNotificationService
  ) { }

  ngOnInit(): void {
  }

  login(dadosLogin: PoPageLogin): void {
    if (this.loginService.login(dadosLogin.login, dadosLogin.password)) {
      this.router.navigate(['inicio']);
    } else {
      this.notificationService.error('Usuário ou senha inválidos.');
    }
  }
}
