package com.ihaproject.service;

import com.ihaproject.exception.IhaNotFoundException;
import com.ihaproject.model.Telemetry;
import com.ihaproject.repository.TelemetryRepository;
import com.ihaproject.util.TelemetryGenerator;
import com.ihaproject.util.TelemetryMover;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TelemetryService {
   private final TelemetryRepository REPOSITORY;

   public TelemetryService(TelemetryRepository repository) {
      this.REPOSITORY = repository;
   }

   public Telemetry saveTelemetry(Telemetry telemetry) {
      return REPOSITORY.save(telemetry);
   }

   public Telemetry generateRandomTelemetry() {
      Telemetry telemetry = TelemetryGenerator.generate();
      return REPOSITORY.save(telemetry);
   }

   public List<Telemetry> getAllTelemetry() {
      return REPOSITORY.findAll();
   }

   public Optional<Telemetry> getTelemetryById(Long ihaId) {
      return REPOSITORY.findById(ihaId);
   }

   public void deleteTelemetry(Long ihaId) {
      REPOSITORY.deleteById(ihaId);
   }

   public void deleteAllTelemetry() {
      REPOSITORY.deleteAll();
   }

   public Telemetry updateDestination(Long ihaId, Double targetLatitude, Double targetLongitude) {
      Telemetry telemetry = REPOSITORY.findById(ihaId)
              .orElseThrow(() -> new IhaNotFoundException(ihaId));

      telemetry.setTargetLatitude(targetLatitude);
      telemetry.setTargetLongitude(targetLongitude);
      telemetry.setMissionProgress(0d);

      return REPOSITORY.save(telemetry);
   }

   public Telemetry moveTowardsTarget(Long ihaId) {
      Optional<Telemetry> optionalTelemetry = REPOSITORY.findById(ihaId);
      if (optionalTelemetry.isEmpty()) {
         return null;
      }
      Telemetry telemetry = optionalTelemetry.get();
      Telemetry updatedTelemetry = TelemetryMover.moveTowardsTarget(telemetry);
      return REPOSITORY.save(updatedTelemetry);
   }

   public boolean existsById(Long ihaId) {
      return REPOSITORY.existsById(ihaId);
   }

   public long countTelemetry() {
      return REPOSITORY.count();
   }

}
