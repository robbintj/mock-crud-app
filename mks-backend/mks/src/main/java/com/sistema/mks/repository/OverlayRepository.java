package com.sistema.mks.repository;

import com.sistema.mks.model.Overlay;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OverlayRepository extends JpaRepository<Overlay, Long> {
    // Métodos personalizados de consulta podem ser adicionados aqui
}
