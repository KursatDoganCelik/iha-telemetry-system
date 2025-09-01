package com.ihaproject.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class CreateTelemetryRequest {

   @Schema(example = "40.123456")
   private double currentLatitude;

   @Schema(example = "30.654321")
   private double currentLongitude;

   @Schema(example = "1200")
   private int altitude;

   @Schema(example = "45.32")
   private double speed;

   @Schema(example = "85")
   private int battery;
}
