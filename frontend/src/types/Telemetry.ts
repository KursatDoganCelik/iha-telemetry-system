export interface Telemetry {
   ihaId: number;
   startLatitude: number | null;
   startLongitude: number | null;
   currentLatitude: number;
   currentLongitude: number;
   targetLatitude: number | null;
   targetLongitude: number | null;
   altitude: number;
   speed: number;
   battery: number;
   missionProgress: number | null;
   timestamp: string;
}

