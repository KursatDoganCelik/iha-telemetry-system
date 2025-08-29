package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.NumberUtil;

import java.util.Random;

public class AltitudeUpdater {

   private static final Random random = new Random();

   public static void updateAltitude(Telemetry telemetry) {
      int currentAltitude = telemetry.getAltitude();
      int newAltitude = currentAltitude + NumberUtil.getRandomInt(-50, +50);
      telemetry.setAltitude(Math.max(newAltitude, 0));
   }
}
