package com.ihaproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidTargetException extends RuntimeException {
   public InvalidTargetException(Long ihaId) {
      super("İHA " + ihaId + " için hedef koordinatları tanımlı değil.");
   }
}
