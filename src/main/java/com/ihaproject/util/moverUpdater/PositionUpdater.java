package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.NumberUtil;

public class PositionUpdater {

   public static void updatePosition(Telemetry telemetry) {
      double currentLatitude = telemetry.getCurrentLatitude();
      double currentLongitude = telemetry.getCurrentLongitude();
      double targetLatitude = telemetry.getTargetLatitude();
      double targetLongitude = telemetry.getTargetLongitude();

      double distance = NumberUtil.calculateDistance(
              currentLatitude, currentLongitude,
              targetLatitude, targetLongitude
      );
      if (distance == 0) return;

      double unitLatitude = (targetLatitude - currentLatitude) / distance;
      double unitLongitude = (targetLongitude - currentLongitude) / distance;

      double stepLength = (telemetry.getSpeed() / 100.0) * 0.7;

      double moveLength = Math.min(stepLength, distance);

      double newLatitude = currentLatitude + unitLatitude * moveLength;
      double newLongitude = currentLongitude + unitLongitude * moveLength;

      telemetry.setCurrentLatitude(NumberUtil.round(newLatitude, 6));
      telemetry.setCurrentLongitude(NumberUtil.round(newLongitude, 6));
   }
}
