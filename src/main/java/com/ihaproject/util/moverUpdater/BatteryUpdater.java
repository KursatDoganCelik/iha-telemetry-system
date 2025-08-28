package com.ihaproject.util.moverUpdater;

import com.ihaproject.model.Telemetry;

public class BatteryUpdater {

   public static void updateBattery(Telemetry telemetry) {
      int batteryDrop = (int) Math.round(telemetry.getSpeed() / 10.0);
      int newBattery = telemetry.getBattery() - batteryDrop;
      telemetry.setBattery(Math.max(newBattery, 0));
   }
}
