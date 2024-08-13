export interface Overlay {
    idProduto: string;
    paredeFornalha: string;
    local: string;
    numeroTubo: string;
    numeroTuboAdjacente: string;
    elevacaoInferior: string;
    elevacaoSuperior: string;
    dimensao: string;
    escopo: string;
    lado: string;
    tipoEscopo: string;
    liberadoGeral: boolean;
    pendenteGeralParceiro: boolean;
    pendenteGeralMKS: boolean;
    executadoSoldaMKS: boolean;
    terminoMKS: boolean;
    validacaoCQMKS: boolean;
    validacaoMKS: boolean;
    validadoParceiro: boolean;
    vsParceiro: boolean;
    lpParceiro: boolean;
    liberadoParceiro: boolean;
    dataLiberadoParceiro: Date;
    status: string;
    observacaoAlumar: string;
    observacaoMKS: string;
    observacaoParceiro: string;
  }
  