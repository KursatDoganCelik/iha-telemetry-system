package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;

import java.util.Random;

public class AltitudeUpdater {

   private static final Random random = new Random();

   public static void updateAltitude(Telemetry telemetry) {
      int currentAltitude = telemetry.getAltitude();
      int newAltitude = currentAltitude + (random.nextInt(11) - 5); // -5 ila +5
      telemetry.setAltitude(Math.max(newAltitude, 0));
   }
}
