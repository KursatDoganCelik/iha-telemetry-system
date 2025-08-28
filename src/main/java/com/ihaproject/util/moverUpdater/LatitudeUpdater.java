package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.NumberUtil;

public class LatitudeUpdater {

   public static void updateLatitude(Telemetry telemetry) {
      double deltaLatitudeMax = (telemetry.getSpeed() / 100.0) * 0.636;
      double latitudeDifference = telemetry.getTargetLatitude() - telemetry.getCurrentLatitude();

      if (Math.abs(latitudeDifference) <= Math.abs(deltaLatitudeMax)) {
         telemetry.setCurrentLatitude(telemetry.getTargetLatitude());
      } else {
         double newLatitude = telemetry.getCurrentLatitude() + Math.signum(latitudeDifference) * deltaLatitudeMax;
         telemetry.setCurrentLatitude(NumberUtil.round(newLatitude, 6));
      }
   }
}
