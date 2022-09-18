import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'
import { PerfilComponent } from './perfil/perfil.component'
import { ServiciosComponent } from './servicios/servicios.component'
import { FichaJugadorComponent } from './ficha/ficha.component'

const routes: Routes = [
  {path: 'servicios', component:ServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mi-perfil', component:PerfilComponent},
  {path: 'sobre-nosotros', component: AboutComponent},
  {path: 'jugador/:nombre', component: FichaJugadorComponent}
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
  {path: '**', component: Pagina404Component}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }