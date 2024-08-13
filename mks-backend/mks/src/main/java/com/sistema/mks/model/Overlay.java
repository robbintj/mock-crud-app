package com.sistema.mks.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "overlay")
public class Overlay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_produto", unique = true, nullable = false)
    private String idProduto;

    @Column(name = "parede_fornalha")
    private String paredeFornalha;

    @Column(name = "local")
    private String local;

    @Column(name = "numero_tubo")
    private int numeroTubo;

    @Column(name = "numero_tubo_adjacente")
    private String numeroTuboAdjacente;

    @Column(name = "elevacao_inferior")
    private int elevacaoInferior;

    @Column(name = "elevacao_superior")
    private int elevacaoSuperior;

    @Column(name = "dimensao_mm")
    private int dimensao;

    @Column(name = "escopo")
    private String escopo;

    @Column(name = "lado")
    private String lado;

    @Column(name = "tipo_escopo")
    private String tipoEscopo;

    @Column(name = "liberado_geral")
    private String liberadoGeral;

    @Column(name = "pendente_geral_parceiro")
    private String pendenteGeralParceiro;

    @Column(name = "pendente_geral_mks")
    private String pendenteGeralMKS;

    @Column(name = "executado_solda_mks")
    private int executadoSoldaMKS;

    @Column(name = "termino_mks")
    @Temporal(TemporalType.DATE)
    private Date terminoMKS;

    @Column(name = "validacao_cq_mks")
    private int validacaoCQMKS;

    @Column(name = "validacao_mks")
    @Temporal(TemporalType.DATE)
    private Date validacaoMKS;

    @Column(name = "validado_parceiro")
    private int validadoParceiro;

    @Column(name = "vs_parceiro")
    private int vsParceiro;

    @Column(name = "lp_paceiro")
    private int lpParceiro;

    @Column(name = "liberado_parceiro")
    private String liberadoParceiro;

    @Column(name = "data_liberado_parceiro")
    @Temporal(TemporalType.DATE)
    private Date dataLiberadoParceiro;

    @Column(name = "status")
    private String status;

    @Column(name = "observacao_alumar")
    private String observacaoAlumar;

    @Column(name = "observacao_mks")
    private String observacaoMKS;

    @Column(name = "observacao_Parceiro")
    private String observacaoParceiro;

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(String idProduto) {
        this.idProduto = idProduto;
    }

    public String getParedeFornalha() {
        return paredeFornalha;
    }

    public void setParedeFornalha(String paredeFornalha) {
        this.paredeFornalha = paredeFornalha;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public int getNumeroTubo() {
        return numeroTubo;
    }

    public void setNumeroTubo(int numeroTubo) {
        this.numeroTubo = numeroTubo;
    }

    public String getNumeroTuboAdjacente() {
        return numeroTuboAdjacente;
    }

    public void setNumeroTuboAdjacente(String numeroTuboAdjacente) {
        this.numeroTuboAdjacente = numeroTuboAdjacente;
    }

    public int getElevacaoInferior() {
        return elevacaoInferior;
    }

    public void setElevacaoInferior(int elevacaoInferior) {
        this.elevacaoInferior = elevacaoInferior;
    }

    public int getElevacaoSuperior() {
        return elevacaoSuperior;
    }

    public void setElevacaoSuperior(int elevacaoSuperior) {
        this.elevacaoSuperior = elevacaoSuperior;
    }

    public int getDimensao() {
        return dimensao;
    }

    public void setDimensao(int dimensao) {
        this.dimensao = dimensao;
    }

    public String getEscopo() {
        return escopo;
    }

    public void setEscopo(String escopo) {
        this.escopo = escopo;
    }

    public String getLado() {
        return lado;
    }

    public void setLado(String lado) {
        this.lado = lado;
    }

    public String getTipoEscopo() {
        return tipoEscopo;
    }

    public void setTipoEscopo(String tipoEscopo) {
        this.tipoEscopo = tipoEscopo;
    }

    public String getLiberadoGeral() {
        return liberadoGeral;
    }

    public void setLiberadoGeral(String liberadoGeral) {
        this.liberadoGeral = liberadoGeral;
    }

    public String getPendenteGeralParceiro() {
        return pendenteGeralParceiro;
    }

    public void setPendenteGeralParceiro(String pendenteGeralParceiro) {
        this.pendenteGeralParceiro = pendenteGeralParceiro;
    }

    public String getPendenteGeralMKS() {
        return pendenteGeralMKS;
    }

    public void setPendenteGeralMKS(String pendenteGeralMKS) {
        this.pendenteGeralMKS = pendenteGeralMKS;
    }

    public int getExecutadoSoldaMKS() {
        return executadoSoldaMKS;
    }

    public void setExecutadoSoldaMKS(int executadoSoldaMKS) {
        this.executadoSoldaMKS = executadoSoldaMKS;
    }

    public Date getTerminoMKS() {
        return terminoMKS;
    }

    public void setTerminoMKS(Date terminoMKS) {
        this.terminoMKS = terminoMKS;
    }

    public int getValidacaoCQMKS() {
        return validacaoCQMKS;
    }

    public void setValidacaoCQMKS(int validacaoCQMKS) {
        this.validacaoCQMKS = validacaoCQMKS;
    }

    public Date getValidacaoMKS() {
        return validacaoMKS;
    }

    public void setValidacaoMKS(Date validacaoMKS) {
        this.validacaoMKS = validacaoMKS;
    }

    public int getValidadoParceiro() {
        return validadoParceiro;
    }

    public void setValidadoParceiro(int validadoParceiro) {
        this.validadoParceiro = validadoParceiro;
    }

    public int getVsParceiro() {
        return vsParceiro;
    }

    public void setVsParceiro(int vsParceiro) {
        this.vsParceiro = vsParceiro;
    }

    public int getLpParceiro() {
        return lpParceiro;
    }

    public void setLpParceiro(int lpParceiro) {
        this.lpParceiro = lpParceiro;
    }

    public String getLiberadoParceiro() {
        return liberadoParceiro;
    }

    public void setLiberadoParceiro(String liberadoParceiro) {
        this.liberadoParceiro = liberadoParceiro;
    }

    public Date getDataLiberadoParceiro() {
        return dataLiberadoParceiro;
    }

    public void setDataLiberadoParceiro(Date dataLiberadoParceiro) {
        this.dataLiberadoParceiro = dataLiberadoParceiro;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getObservacaoAlumar() {
        return observacaoAlumar;
    }

    public void setObservacaoAlumar(String observacaoAlumar) {
        this.observacaoAlumar = observacaoAlumar;
    }

    public String getObservacaoMKS() {
        return observacaoMKS;
    }

    public void setObservacaoMKS(String observacaoMKS) {
        this.observacaoMKS = observacaoMKS;
    }

    public String getObservacaoParceiro() {
        return observacaoParceiro;
    }

    public void setObservacaoParceiro(String observacaoParceiro) {
        this.observacaoParceiro = observacaoParceiro;
    }

    @PrePersist
    @PreUpdate
    public void prePersistOrUpdate() {
        generateIdProduto();
        calculateDimensions();
        determineStatus();
    }

    private void generateIdProduto() {
        if (local != null && paredeFornalha != null && id != null) {
            idProduto = String.format("%s%s%d",
                    local.substring(0, 2).toUpperCase(),
                    paredeFornalha.substring(0, 2).toUpperCase(),
                    id);
        }
    }

    private void calculateDimensions() {
        if ("TUBO".equals(local)) {
            dimensao = (elevacaoSuperior - elevacaoInferior) + 100;
            numeroTuboAdjacente = "TUBO" + (numeroTubo + 1);
        } else {
            dimensao = elevacaoSuperior - elevacaoInferior;
            numeroTuboAdjacente = "";
        }
    }

    private void determineStatus() {
        if (idProduto != null && paredeFornalha != null && local != null &&
                numeroTubo != 0 && numeroTuboAdjacente != null && elevacaoInferior != 0 &&
                elevacaoSuperior != 0 && dimensao != 0 && escopo != null && lado != null &&
                tipoEscopo != null && liberadoGeral != null && pendenteGeralMKS != null &&
                executadoSoldaMKS != 0) {
            status = "ANDAMENTO";
        } else if (idProduto != null && paredeFornalha != null && local != null &&
                numeroTubo != 0 && numeroTuboAdjacente != null && elevacaoInferior != 0 &&
                elevacaoSuperior != 0 && dimensao != 0 && escopo != null && lado != null &&
                tipoEscopo != null && liberadoGeral != null && pendenteGeralMKS != null &&
                executadoSoldaMKS != 0 && terminoMKS != null && validacaoCQMKS != 0 &&
                validacaoMKS != null && validadoParceiro != 0 && vsParceiro != 0 &&
                lpParceiro != 0 && liberadoParceiro != null && dataLiberadoParceiro != null) {
            status = "CONCLUÍDO";
        } else {
            status = "PENDENTE";
        }
    }



}
