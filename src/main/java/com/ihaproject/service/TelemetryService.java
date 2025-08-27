package com.ihaproject.service;

import com.ihaproject.model.Telemetry;
import com.ihaproject.repository.TelemetryRepository;
import com.ihaproject.util.TelemetryGenerator;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class TelemetryService {
   private final TelemetryRepository REPOSITORY;
   private final Random random = new Random();

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

   public Optional<Telemetry> getTelemetryById(Long id) {
      return REPOSITORY.findById(id);
   }

   public void deleteTelemetry(Long id) {
      REPOSITORY.deleteById(id);
   }

   public void deleteAllTelemetry() {
      REPOSITORY.deleteAll();
   }

}
