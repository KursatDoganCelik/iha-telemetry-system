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

}
