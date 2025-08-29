package com.ihaproject.controller;

import com.ihaproject.model.Telemetry;
import com.ihaproject.service.SchedulerService;
import com.ihaproject.service.TelemetryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/telemetry")
public class TelemetryController {

   private final TelemetryService SERVICE;
   private final SchedulerService SCHEDULERSERVICE;

   public TelemetryController(TelemetryService service, SchedulerService schedulerService) {
      this.SERVICE = service;
      this.SCHEDULERSERVICE = schedulerService;
   }

   @GetMapping
   public List<Telemetry> getAllTelemetry() {
      return SERVICE.getAllTelemetry();
   }

   @GetMapping("/{ihaId}")
   public Telemetry getTelemetryById(@PathVariable Long ihaId) {
      return SERVICE.getTelemetryById(ihaId).orElse(null);
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

   @PutMapping("/{ihaId}/start")
   public void startMoving(@PathVariable Long ihaId) {
      SCHEDULERSERVICE.startMoving(ihaId);
   }

   @PutMapping("/stop")
   public void stopMoving() {
      SCHEDULERSERVICE.stopMoving();
   }

   @GetMapping("/active")
   public Long getActive() {
      return SCHEDULERSERVICE.getActiveIhaId();
   }

}
