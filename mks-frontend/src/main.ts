import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { LoginComponent } from './app/components/login/login.component'; 
import { OverlayListComponent } from './app/components/overlay-list/overlay-list.component';
import { OverlayFormComponent } from './app/components/overlay-form/overlay-form.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'overlays', component: OverlayListComponent },
  { path: 'overlays/new', component: OverlayFormComponent },
  { path: 'overlays/edit/:id', component: OverlayFormComponent },
  { path: '**', redirectTo: '/login' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)), // Adiciona suporte a rotas
    provideHttpClient(withInterceptorsFromDi()), // Atualize para usar withInterceptorsFromDi
    provideAnimationsAsync(), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
