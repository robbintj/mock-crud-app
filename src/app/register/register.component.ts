import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MockDataService } from '../services/mock-data.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [MockDataService]
})
export class RegisterComponent implements OnInit {
  data: any = {};

  fields = [
    { name: 'id', label: 'ID', type: 'text', hint: 'Digite o ID', required: true },
    { name: 'paredeFornalha', label: 'Parede Fornalha', type: 'text', hint: 'Descrição da parede', required: true },
    { name: 'local', label: 'Local', type: 'text', hint: 'Local do tubo', required: true },
    { name: 'nTubo', label: 'Nº Tubo', type: 'text', hint: 'Número do tubo', required: true },
    { name: 'nTuboAdjacente', label: 'Nº Tubo adjacente', type: 'text', hint: 'Número do tubo adjacente', required: false },
    { name: 'elevacaoInferior', label: 'Elevação Inferior', type: 'number', hint: 'Elevação inferior', required: true },
    { name: 'elevacaoSuperior', label: 'Elevação Superior', type: 'number', hint: 'Elevação superior', required: true },
    { name: 'dimensao', label: 'Dimensão (mm)', type: 'number', hint: 'Dimensão em milímetros', required: true },
    { name: 'escopo', label: 'Escopo', type: 'text', hint: 'Escopo do projeto', required: false },
    { name: 'lado', label: 'Lado', type: 'select', options: ['INTERNO', 'EXTERNO'], hint: 'Selecione o lado', required: true },
    { name: 'tipoEscopo', label: 'Tipo Escopo', type: 'text', hint: 'Tipo de escopo', required: false },
    { name: 'liberadoGeral', label: 'Liberado geral', type: 'text', hint: 'Liberado geral', required: false },
    { name: 'pendenteGeralH2F', label: 'Pendente Geral H2F', type: 'text', hint: 'Pendente geral H2F', required: false },
    { name: 'pendenteGeralMKS', label: 'Pendente Geral MKS', type: 'text', hint: 'Pendente geral MKS', required: false },
    { name: 'executadoSoldaMKS', label: 'Executado solda MKS', type: 'number', hint: 'Executado solda MKS', required: false },
    { name: 'terminoMKS', label: 'Término MKS', type: 'date', hint: 'Data de término MKS', required: false },
    { name: 'validacaoCQ_MKS', label: 'Validação CQ MKS', type: 'number', hint: 'Validação CQ MKS', required: false },
    { name: 'validacaoMKS', label: 'Validação MKS', type: 'date', hint: 'Data de validação MKS', required: false },
    { name: 'validadoH2F', label: 'Validado H2F', type: 'number', hint: 'Validado H2F', required: false },
    { name: 'vsH2F', label: 'VS H2F', type: 'number', hint: 'VS H2F', required: false },
    { name: 'lpH2F', label: 'LP H2F', type: 'number', hint: 'LP H2F', required: false },
    { name: 'liberadoH2F', label: 'Liberado H2F', type: 'number', hint: 'Liberado H2F', required: false },
    { name: 'dataLiberadoH2F', label: 'Data Liberado H2F', type: 'date', hint: 'Data liberado H2F', required: false },
    { name: 'status', label: 'Status', type: 'text', hint: 'Status do item', required: false },
    { name: 'observacaoAlumar', label: 'Observação ALUMAR', type: 'text', hint: 'Observação ALUMAR', required: false },
    { name: 'observacaoMKS', label: 'Observação MKS', type: 'text', hint: 'Observação MKS', required: false },
    { name: 'observacaoH2F', label: 'Observação H2F', type: 'text', hint: 'Observação H2F', required: false }
  ];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.data = this.mockDataService.getData()[0];
  }

  onSubmit() {
    console.log('Form data:', this.data);
    // Aqui você pode adicionar a lógica para salvar os dados, por exemplo, em um serviço.
  }
}
