import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials);
  }
  // getOverlays(): Observable<any> {
  //   // Acesso ao token
  //   const token = localStorage.getItem('authToken');

  //   // Criação dos cabeçalhos da requisição com o token
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   // Requisição autenticada à API
  //   return this.http.get(`${environment.apiUrl}/overlays`, { headers });
  // }
}







// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   constructor(private http: HttpClient) {
//     console.log(environment.apiUrl); 
//   }
  

//   login(credentials: { username: string; password: string }): Observable<any> {
//     return this.http.post(`${environment.apiUrl}/auth/login`, credentials);
//   }
// }

