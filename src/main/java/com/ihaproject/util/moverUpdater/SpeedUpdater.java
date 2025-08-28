package com.ihaproject.util.moverUpdater;

import com.ihaproject.util.NumberUtil;

import java.util.Random;

public class SpeedUpdater {

   private static final Random random = new Random();

   public static double updateSpeed(double currentSpeed) {
      double newSpeed = currentSpeed + (random.nextDouble() * 4 - 2); // -2 ile +2
      if (newSpeed < 0) newSpeed = 0;
      return NumberUtil.round(newSpeed, 2);
   }
}
