export type Telemetry = {
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

export type TelemetryForm = {
   currentLatitude: string;
   currentLongitude: string;
   altitude: string;
   speed: string;
   battery: string;
};

export const initialForm: TelemetryForm = {
   currentLatitude: "",
   currentLongitude: "",
   altitude: "",
   speed: "",
   battery: "",
};

export type TargetForm = {
   targetLatitude: string;
   targetLongitude: string;
};

export const initialTarget: TargetForm = {
   targetLatitude: "",
   targetLongitude: "",
};
