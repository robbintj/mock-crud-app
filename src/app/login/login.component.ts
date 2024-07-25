import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; // Adicione o módulo do Angular Material
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule]  // Importar FormsModule para ngModel
})
export class LoginComponent {
  userId: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.userId === 'admin' && this.password === 'admin') {
      this.router.navigate(['/register']);
    } else {
      alert('Invalid credentials');
    }
  }
}
