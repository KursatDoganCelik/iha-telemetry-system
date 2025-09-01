package com.ihaproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class IhaNotFoundException extends RuntimeException {
   public IhaNotFoundException(Long ihaId) {
      super("İHA " + ihaId + " bulunamadı");
   }
}

