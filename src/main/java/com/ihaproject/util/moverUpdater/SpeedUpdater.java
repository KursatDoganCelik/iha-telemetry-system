package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.NumberUtil;

import java.util.Random;

public class SpeedUpdater {

   private static final Random random = new Random();

   public static void updateSpeed(Telemetry telemetry) {
      double newSpeed = telemetry.getSpeed() + NumberUtil.getRandomDouble(-3, 3, 2);
      telemetry.setSpeed(Math.max(NumberUtil.round(newSpeed, 2), 0));
   }
}
