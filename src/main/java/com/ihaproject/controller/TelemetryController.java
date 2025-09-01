package com.ihaproject.controller;

import com.ihaproject.dto.CreateTelemetryRequest;
import com.ihaproject.dto.DestinationRequest;
import com.ihaproject.exception.IhaNotFoundException;
import com.ihaproject.exception.InvalidTargetException;
import com.ihaproject.exception.NoActiveIhaException;
import com.ihaproject.exception.SimulationAlreadyRunningException;
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
      return SERVICE.getTelemetryById(ihaId)
              .orElseThrow(() -> new IhaNotFoundException(ihaId));
   }

   @PostMapping
   public Telemetry createTelemetry(@RequestBody CreateTelemetryRequest request) {
      Telemetry telemetry = new Telemetry();
      telemetry.setCurrentLatitude(request.getCurrentLatitude());
      telemetry.setCurrentLongitude(request.getCurrentLongitude());
      telemetry.setAltitude(request.getAltitude());
      telemetry.setSpeed(request.getSpeed());
      telemetry.setBattery(request.getBattery());

      return SERVICE.saveTelemetry(telemetry);
   }

   @PostMapping("/random")
   public Telemetry createRandomTelemetry() {
      return SERVICE.generateRandomTelemetry();
   }

   @DeleteMapping("/{ihaId}")
   public void deleteTelemetry(@PathVariable Long ihaId) {
      if (!SERVICE.existsById(ihaId)) {
         throw new IhaNotFoundException(ihaId);
      }
      SERVICE.deleteTelemetry(ihaId);
   }

   @DeleteMapping("/all")
   public void deleteAllTelemetry() {
      if (SERVICE.countTelemetry() == 0) {
         throw new IhaNotFoundException(-1L);
      }
      SERVICE.deleteAllTelemetry();
   }

   @PutMapping("/{ihaId}/destination")
   public Telemetry updateDestination(
           @PathVariable Long ihaId,
           @RequestBody DestinationRequest request) {

      if (request.getTargetLatitude() == null || request.getTargetLongitude() == null) {
         throw new InvalidTargetException(ihaId);
      }

      return SERVICE.updateDestination(ihaId, request.getTargetLatitude(), request.getTargetLongitude());
   }

   @PutMapping("/{ihaId}/move")
   public Telemetry moveTowardsTarget(@PathVariable Long ihaId) {
      SERVICE.getTelemetryById(ihaId)
              .orElseThrow(() -> new IhaNotFoundException(ihaId));

      return SERVICE.moveTowardsTarget(ihaId);
   }

   @PutMapping("/{ihaId}/start")
   public void startMoving(@PathVariable Long ihaId) {
      Long active = SCHEDULERSERVICE.getActiveIhaId();

      if (active != null) {
         throw new SimulationAlreadyRunningException(active);
      }

      Telemetry telemetry = SERVICE.getTelemetryById(ihaId)
              .orElseThrow(() -> new IhaNotFoundException(ihaId));

      if (telemetry.getTargetLatitude() == null || telemetry.getTargetLongitude() == null) {
         throw new InvalidTargetException(ihaId);
      }

      SCHEDULERSERVICE.startMoving(ihaId);
   }

   @PutMapping("/stop")
   public void stopMoving() {
      Long active = SCHEDULERSERVICE.getActiveIhaId();
      if (active == null) {
         throw new NoActiveIhaException();
      }
      SCHEDULERSERVICE.stopMoving();
   }

   @GetMapping("/active")
   public Telemetry getActive() {
      Long activeIhaId = SCHEDULERSERVICE.getActiveIhaId();
      if (activeIhaId == null) {
         throw new NoActiveIhaException();
      }
      return SERVICE.getTelemetryById(activeIhaId)
              .orElseThrow(() -> new IhaNotFoundException(activeIhaId));
   }

}
