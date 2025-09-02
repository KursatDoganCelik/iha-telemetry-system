package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.NumberUtil;

public class MissionProgressUpdater {

   public static void updateMissionProgress(Telemetry telemetry) {
      if (telemetry.getStartLatitude() == null || telemetry.getStartLongitude() == null
              || telemetry.getTargetLatitude() == null || telemetry.getTargetLongitude() == null) {
         telemetry.setMissionProgress(0.0);
         return;
      }

      double totalDistance = NumberUtil.calculateDistance(
              telemetry.getStartLatitude(), telemetry.getStartLongitude(),
              telemetry.getTargetLatitude(), telemetry.getTargetLongitude()
      );

      double traveled = NumberUtil.calculateDistance(
              telemetry.getStartLatitude(), telemetry.getStartLongitude(),
              telemetry.getCurrentLatitude(), telemetry.getCurrentLongitude()
      );

      double progress = (totalDistance == 0) ? 100.0 : (traveled / totalDistance) * 100;
      telemetry.setMissionProgress(NumberUtil.round(progress, 1));

   }

}
