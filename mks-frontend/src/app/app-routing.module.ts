import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverlayListComponent } from './components/overlay-list/overlay-list.component'; 
import { OverlayFormComponent } from './components/overlay-form/overlay-form.component'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Adicione a rota para LoginComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota inicial
  { path: 'overlays', component: OverlayListComponent },
  { path: 'overlays/new', component: OverlayFormComponent },
  { path: 'overlays/edit/:id', component: OverlayFormComponent },
  { path: '**', redirectTo: '/login' } // Redireciona qualquer rota desconhecida para a página de login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
