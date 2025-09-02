package com.ihaproject.util;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.moverUpdater.*;

public class TelemetryMover {

   public static Telemetry moveTowardsTarget(Telemetry telemetry) {
      PositionUpdater.updatePosition(telemetry);
      BatteryUpdater.updateBattery(telemetry);
      SpeedUpdater.updateSpeed(telemetry);
      AltitudeUpdater.updateAltitude(telemetry);
      MissionProgressUpdater.updateMissionProgress(telemetry);

      return telemetry;
   }
}
