import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private data = [
    {
      id: '1', paredeFornalha: 'TRASEIRA', local: 'ALETA', nTubo: '1', nTuboAdjacente: '2',
      elevacaoInferior: 0, elevacaoSuperior: 305, dimensao: 100, escopo: 'REVEST. NORMAL',
      lado: 'INTERNO', tipoEscopo: '', liberadoGeral: '', pendenteGeralH2F: '', pendenteGeralMKS: '',
      executadoSoldaMKS: 405, terminoMKS: '2024-06-15', validacaoCQ_MKS: 305, validacaoMKS: '2024-06-17',
      validadoH2F: 305, vsH2F: 305, lpH2F: 305, liberadoH2F: 305, dataLiberadoH2F: '2024-06-18',
      status: 'PENDENTE', observacaoAlumar: '', observacaoMKS: '', observacaoH2F: ''
    },
    {
      id: '2', paredeFornalha: 'OESTE', local: 'ALETA', nTubo: '15', nTuboAdjacente: '16',
      elevacaoInferior: 305, elevacaoSuperior: 914, dimensao: 200, escopo: 'REVEST. NORMAL',
      lado: 'INTERNO', tipoEscopo: '', liberadoGeral: '', pendenteGeralH2F: '', pendenteGeralMKS: '',
      executadoSoldaMKS: 600, terminoMKS: '2024-06-15', validacaoCQ_MKS: 590, validacaoMKS: '2024-06-15',
      validadoH2F: 590, vsH2F: 590, lpH2F: 590, liberadoH2F: 590, dataLiberadoH2F: '2024-06-19',
      status: 'PENDENTE', observacaoAlumar: '', observacaoMKS: '', observacaoH2F: ''
    }
    // Adicione mais dados conforme necessário
  ];

  getData() {
    return this.data;
  }
}
