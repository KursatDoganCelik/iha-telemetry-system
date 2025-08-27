package com.ihaproject.service;

import com.ihaproject.model.Telemetry;
import com.ihaproject.repository.TelemetryRepository;
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

   public List<Telemetry> getAllTelemetry() {
      return REPOSITORY.findAll();
   }

   public Optional<Telemetry> getTelemetryById(Long id) {
      return REPOSITORY.findById(id);
   }

   public void deleteTelemetry(Long id) {
      REPOSITORY.deleteById(id);
   }
}
