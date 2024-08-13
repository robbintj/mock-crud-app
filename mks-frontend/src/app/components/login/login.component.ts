
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, LoginComponent]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
      this.authService.login({ username: this.username, password: this.password }).subscribe(
        (response) => {
          // Armazena o token no localStorage
          localStorage.setItem('authToken', response.token);

          // Redireciona para a lista de overlays
          this.router.navigate(['/overlays-list']);
        },
        (error) => {
          alert('Invalid credentials');
        }
      );
    } else {
      alert('Invalid credentials');
    }
  }
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   standalone: true,
//   imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, LoginComponent]
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onSubmit() {
//     if (this.username && this.password) {
//       this.authService.login({ username: this.username, password: this.password }).subscribe(() => {
//         this.router.navigate(['/overlays-list']);
//       });
//     } else {
//       alert('Invalid credentials');
//     }
//   }
// }
