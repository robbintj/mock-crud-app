import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Overlay } from '../models/overlay.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  constructor(private http: HttpClient) {}

  getOverlays(): Observable<Overlay[]> {
    return this.http.get<Overlay[]>(`${environment.apiUrl}/overlays`);
  }

  getOverlay(id: number): Observable<Overlay> {
    return this.http.get<Overlay>(`${environment.apiUrl}/overlays/${id}`);
  }

  createOverlay(overlay: Overlay): Observable<Overlay> {
    return this.http.post<Overlay>(`${environment.apiUrl}/overlays`, overlay);
  }

  updateOverlay(id: number, overlay: Overlay): Observable<Overlay> {
    return this.http.put<Overlay>(`${environment.apiUrl}/overlays/${id}`, overlay);
  }

  deleteOverlay(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/overlays/${id}`);
  }
}
