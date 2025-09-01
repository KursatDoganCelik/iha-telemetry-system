package com.ihaproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class SimulationAlreadyRunningException extends RuntimeException {
   public SimulationAlreadyRunningException(Long activeIhaId) {
      super("Zaten aktif bir simülasyon var (İHA " + activeIhaId + ")");
   }
}
