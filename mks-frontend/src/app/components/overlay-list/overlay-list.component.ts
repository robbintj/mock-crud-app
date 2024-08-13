import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayService } from '../../services/overlay.service';
import { Overlay } from '../../models/overlay.model';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';  // Importe o MatTableModule
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-overlay-list',
  templateUrl: './overlay-list.component.html',
  styleUrls: ['./overlay-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule,
    MatButtonModule,
    MatTableModule  // Adicione o MatTableModule aqui
  ],
  providers: [OverlayService]  // Adicione o serviço aqui
})
export class OverlayListComponent implements OnInit {
  overlays!: Overlay[];
  displayedColumns: string[] = [
    'idProduto',
    'paredeFornalha',
    'local',
    'actions'
  ];

  constructor(private overlayService: OverlayService, private router: Router) {}

  ngOnInit(): void {
    this.loadOverlays();
  }

  loadOverlays() {
    this.overlayService.getOverlays().subscribe(data => {
      this.overlays = data;
    });
  }

  addOverlay() {
    this.router.navigate(['/overlays/new']);
  }

  editOverlay(id: number) {
    this.router.navigate([`/overlays/edit/${id}`]);
  }

  deleteOverlay(id: number) {
    this.overlayService.deleteOverlay(id).subscribe(() => {
      this.loadOverlays();
    });
  }
}
