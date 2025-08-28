package com.ihaproject.util;

import com.ihaproject.model.Telemetry;

import java.time.LocalDateTime;
import java.util.Random;

public class TelemetryGenerator {

   private static final Random random = new Random();

   public static Telemetry generate() {
      Telemetry telemetry = new Telemetry();

      telemetry.setCurrentLatitude(NumberUtil.getRandomDouble(36, 42, 6));
      telemetry.setCurrentLongitude(NumberUtil.getRandomDouble(26, 45, 6));
      telemetry.setAltitude(NumberUtil.getRandomInt(0, 5000));
      telemetry.setSpeed(NumberUtil.getRandomDouble(0, 100, 2));
      telemetry.setBattery(NumberUtil.getRandomInt(0, 100));
      telemetry.setTimestamp(LocalDateTime.now());

      return telemetry;
   }
}
