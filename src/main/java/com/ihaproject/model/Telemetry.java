package com.ihaproject.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Telemetry {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private long id;

   private double latitude;
   private double longitude;
   private double altitude;
   private int speed;
   private int battery;

   private LocalDateTime timestamp;

   @PrePersist
   public void prePersist() {
      this.timestamp = LocalDateTime.now();
   }
}
