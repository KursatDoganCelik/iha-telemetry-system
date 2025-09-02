package com.ihaproject.util;

public class NumberUtil {
   public static double round(double value, int scale) {
      return Math.round(value * Math.pow(10, scale)) / Math.pow(10, scale);
   }

   public static double getRandomDouble(double min, double max, int scale) {
      double value = min + (max - min) * Math.random();
      return round(value, scale);
   }

   public static int getRandomInt(int min, int max) {
      return min + (int) (Math.random() * ((max - min) + 1));
   }

   public static double calculateDistance(double latitude1, double longitude1,
                                          double latitude2, double longitude2) {
      double latitudeDifference = latitude2 - latitude1;
      double longitudeDifference = longitude2 - longitude1;
      return Math.sqrt(latitudeDifference * latitudeDifference +
              longitudeDifference * longitudeDifference);
   }
}
