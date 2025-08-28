package com.ihaproject.controller;

import com.ihaproject.model.Telemetry;
import com.ihaproject.service.TelemetryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/telemetry")
public class TelemetryController {

   private final TelemetryService SERVICE;

   public TelemetryController(TelemetryService service) {
      this.SERVICE = service;
   }

   @GetMapping
   public List<Telemetry> getAllTelemetry() {
      return SERVICE.getAllTelemetry();
   }

   @GetMapping("/{ihaId}")
   public Telemetry getTelemetryById(@PathVariable Long ihaId) {
      return SERVICE.getTelemetryById(ihaId).orElseThrow(
              () -> new RuntimeException("Telemetry not found with ihaId " + ihaId)
      );
   }

   @PostMapping
   public Telemetry createTelemetry(@RequestBody Telemetry telemetry) {
      return SERVICE.saveTelemetry(telemetry);
   }

   @PostMapping("/random")
   public Telemetry createRandomTelemetry() {
      return SERVICE.generateRandomTelemetry();
   }

   @DeleteMapping("/{ihaId}")
   public void deleteTelemetry(@PathVariable Long ihaId) {
      SERVICE.deleteTelemetry(ihaId);
   }

   @DeleteMapping("/all")
   public void deleteAllTelemetry() {
      SERVICE.deleteAllTelemetry();
   }

   @PutMapping("/{ihaId}/destination")
   public Telemetry updateDestination(
           @PathVariable Long ihaId,
           @RequestParam Double targetLatitude,
           @RequestParam Double targetLongitude) {
      return SERVICE.updateDestination(ihaId, targetLatitude, targetLongitude);
   }

   @PutMapping("/{ihaId}/move")
   public Telemetry moveTowardsTarget(@PathVariable Long ihaId) {
      return SERVICE.moveTowardsTarget(ihaId);
   }

}
