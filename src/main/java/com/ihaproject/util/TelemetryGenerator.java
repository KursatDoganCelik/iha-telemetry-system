package com.ihaproject.util;

import com.ihaproject.model.Telemetry;

import java.time.LocalDateTime;
import java.util.Random;

public class TelemetryGenerator {

   private static final Random random = new Random();

   private static double getRandomDouble(double min, double max, int scale) {
      double value = min + (max - min) * random.nextDouble();
      return Math.round(value * Math.pow(10, scale)) / Math.pow(10, scale);
   }

   private static int getRandomInt(int min, int max) {
      return random.nextInt((max - min) + 1) + min;
   }

   public static Telemetry generate() {
      Telemetry telemetry = new Telemetry();

      telemetry.setCurrentLatitude(getRandomDouble(36, 42, 6));
      telemetry.setCurrentLongitude(getRandomDouble(26, 45, 6));
      telemetry.setAltitude(getRandomInt(0, 5000));
      telemetry.setSpeed(getRandomDouble(0, 100, 2));
      telemetry.setBattery(getRandomInt(0, 100));
      telemetry.setTimestamp(LocalDateTime.now());

      return telemetry;
   }
}
