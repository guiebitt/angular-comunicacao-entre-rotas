import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEnum } from './core/entities/perfil.enum';
import { AutenticacaoGuard } from './core/guards/autenticacao.guard';
import { AutorizacaoGuard } from './core/guards/autorizacao.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AutenticacaoGuard, AutorizacaoGuard]
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [AutenticacaoGuard, AutorizacaoGuard],
    data: {
      perfis: [PerfilEnum.GESTOR_CLIENTE, PerfilEnum.ADMINISTRADOR]
    }
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule),
    canActivate: [AutenticacaoGuard, AutorizacaoGuard],
    data: {
      perfis: [PerfilEnum.GESTOR_PRODUTO, PerfilEnum.ADMINISTRADOR]
    }
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
