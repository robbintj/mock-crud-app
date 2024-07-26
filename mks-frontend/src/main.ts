import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Defina as rotas
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

// Bootstrap da aplicação
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Configurar roteamento
    FormsModule, provideAnimationsAsync()
  ]
}).catch(err => console.error('Bootstrap error:', err));
