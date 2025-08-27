package com.ihaproject.controller;

import com.ihaproject.model.Telemetry;
import com.ihaproject.service.TelemetryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/telemetry")
public class TelemetryController {

   private final TelemetryService service;

   public TelemetryController(TelemetryService service) {
      this.service = service;
   }

   @GetMapping
   public List<Telemetry> getAllTelemetry() {
      return service.getAllTelemetry();
   }

   @GetMapping("/{id}")
   public Telemetry getTelemetryById(@PathVariable Long id) {
      return service.getTelemetryById(id).orElseThrow(
              () -> new RuntimeException("Telemetry not found with id " + id)
      );
   }

   @PostMapping
   public Telemetry createTelemetry(@RequestBody Telemetry telemetry) {
      return service.saveTelemetry(telemetry);
   }

   @DeleteMapping("/{id}")
   public void deleteTelemetry(@PathVariable Long id) {
      service.deleteTelemetry(id);
   }

}
