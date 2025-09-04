import React, {createContext, useContext, useEffect, useState} from "react";
import {getActiveTelemetry} from "../services/telemetryService.ts";

interface TelemetryData {
   ihaId: number;
   battery: number;
   speed: number;
   altitude: number;
   missionProgress: number;
   startLatitude: number;
   startLongitude: number;
   currentLatitude: number;
   currentLongitude: number;
   targetLatitude: number;
   targetLongitude: number;
   timestamp: string;
}

interface TelemetryContextType {
   telemetryData: TelemetryData | null;
   setTelemetryData: (data: TelemetryData | null) => void;
   isSimulationActive: boolean;
   setIsSimulationActive: (active: boolean) => void;
}

const TelemetryContext = createContext<TelemetryContextType | undefined>(undefined);

export const TelemetryProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
   const [telemetryData, setTelemetryData] = useState<TelemetryData | null>(null);
   const [isSimulationActive, setIsSimulationActive] = useState(false);

   useEffect(() => {
      if (!isSimulationActive) return;

      const interval = setInterval(async () => {
         const data = await getActiveTelemetry();
         setTelemetryData(data);
      }, 1000);

      return () => clearInterval(interval);
   }, [isSimulationActive]);

   return (
      <TelemetryContext.Provider value={{telemetryData, setTelemetryData, isSimulationActive, setIsSimulationActive}}>
         {children}
      </TelemetryContext.Provider>
   );
};

export const useTelemetry = () => {
   const context = useContext(TelemetryContext);
   if (!context) {
      throw new Error("useTelemetry must be used within a TelemetryProvider");
   }
   return context;
};
