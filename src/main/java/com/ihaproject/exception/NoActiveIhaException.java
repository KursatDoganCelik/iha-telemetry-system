package com.ihaproject.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoActiveIhaException extends RuntimeException {
   public NoActiveIhaException() {
      super("Aktif İHA bulunamadı");
   }
}
