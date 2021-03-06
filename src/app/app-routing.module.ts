import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AdminPage } from './pages/admin/admin.page';
import { MainPage } from './pages/main/main.page';
import { HomePage } from './pages/home/home.page';
import { AuthGuard } from './services/serviceGuard/auth.guard';


const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chatroom/:username',
    loadChildren: () => import('./pages/chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/main-tabs/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'torneos',
    loadChildren: () => import('./pages/main-tabs/torneos/torneos.module').then( m => m.TorneosPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules },)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
