package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.NumberUtil;

public class LongitudeUpdater {

   public static void updateLongitude(Telemetry telemetry) {
      double deltaLongitudeMax = (telemetry.getSpeed() / 100.0) * 0.830;
      double longitudeDifference = telemetry.getTargetLongitude() - telemetry.getCurrentLongitude();

      if (Math.abs(longitudeDifference) <= Math.abs(deltaLongitudeMax)) {
         telemetry.setCurrentLongitude(telemetry.getTargetLongitude());
      } else {
         double newLongitude = telemetry.getCurrentLongitude() + Math.signum(longitudeDifference) * deltaLongitudeMax;
         telemetry.setCurrentLongitude(NumberUtil.round(newLongitude, 6));
      }
   }
}
