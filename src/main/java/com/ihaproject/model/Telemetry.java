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
   private Long ihaId;

   private double currentLatitude;
   private double currentLongitude;
   private Double targetLatitude;
   private Double targetLongitude;
   private int altitude;
   private double speed;
   private int battery;

   private LocalDateTime timestamp;

   @PrePersist
   public void prePersist() {
      this.timestamp = LocalDateTime.now();
   }
}
