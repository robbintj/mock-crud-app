package com.sistema.mks.controller;

import com.sistema.mks.model.Overlay;
import com.sistema.mks.service.OverlayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/overlay")
public class OverlayController {

    @Autowired
    private OverlayService overlayService;

    @GetMapping
    public ResponseEntity<List<Overlay>> getAllOverlays() {
        return new ResponseEntity<>(overlayService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Overlay> getOverlayById(@PathVariable Long id) {
        Optional<Overlay> overlay = overlayService.findById(id);
        return overlay.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Overlay> createOverlay(@RequestBody Overlay overlay) {
        return new ResponseEntity<>(overlayService.save(overlay), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Overlay> updateOverlay(@PathVariable Long id, @RequestBody Overlay overlay) {
        if (!overlayService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        overlay.setId(id);
        return new ResponseEntity<>(overlayService.save(overlay), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOverlay(@PathVariable Long id) {
        if (!overlayService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        overlayService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

