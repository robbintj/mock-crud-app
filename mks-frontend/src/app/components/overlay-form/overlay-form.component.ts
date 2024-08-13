import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '../../services/overlay.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Overlay } from '../../models/overlay.model';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-overlay-form',
  templateUrl: './overlay-form.component.html',
  styleUrls: ['./overlay-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class OverlayFormComponent implements OnInit {
  overlayForm: FormGroup;
  id: number;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.overlayForm = this.fb.group({
      idProduto: ['', Validators.required],
      paredeFornalha: ['', Validators.required],
      local: ['', Validators.required],
      numeroTubo: ['', Validators.required],
      numeroTuboAdjacente: ['', Validators.required],
      elevacaoInferior: ['', Validators.required],
      elevacaoSuperior: ['', Validators.required],
      dimensao: ['', Validators.required],
      escopo: ['', Validators.required],
      lado: ['', Validators.required],
      tipoEscopo: ['', Validators.required],
      liberadoGeral: ['', Validators.required],
      pendenteGeralParceiro: ['', Validators.required],
      pendenteGeralMKS: ['', Validators.required],
      executadoSoldaMKS: ['', Validators.required],
      terminoMKS: ['', Validators.required],
      validacaoCQMKS: ['', Validators.required],
      validacaoMKS: ['', Validators.required],
      validadoParceiro: ['', Validators.required],
      vsParceiro: ['', Validators.required],
      lpParceiro: ['', Validators.required],
      liberadoParceiro: ['', Validators.required],
      dataLiberadoParceiro: ['', Validators.required],
      status: ['', Validators.required],
      observacaoAlumar: ['', Validators.required],
      observacaoMKS: ['', Validators.required],
      observacaoParceiro: ['', Validators.required]
    });

    this.id = this.route.snapshot.params['id'];
    this.isEdit = !!this.id;
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.overlayService.getOverlay(this.id).subscribe(data => {
        this.overlayForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.overlayForm.valid) {
      if (this.isEdit) {
        this.overlayService.updateOverlay(this.id, this.overlayForm.value).subscribe(() => {
          this.router.navigate(['/overlays']);
        });
      } else {
        this.overlayService.createOverlay(this.overlayForm.value).subscribe(() => {
          this.router.navigate(['/overlays']);
        });
      }
    }
  }

  getFieldError(field: string): boolean {
    const control = this.overlayForm.get(field);
    return control ? control.hasError('required') : false;
  }
}
