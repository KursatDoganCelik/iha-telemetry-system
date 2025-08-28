package com.ihaproject.util;

import com.ihaproject.model.Telemetry;
import com.ihaproject.util.moverUpdater.*;

public class TelemetryMover {

   public static Telemetry moveTowardsTarget(Telemetry telemetry) {
      LatitudeUpdater.updateLatitude(telemetry);
      LongitudeUpdater.updateLongitude(telemetry);
      BatteryUpdater.updateBattery(telemetry);
      telemetry.setSpeed(SpeedUpdater.updateSpeed(telemetry.getSpeed()));
      AltitudeUpdater.updateAltitude(telemetry);

      return telemetry;
   }
}
