import React, {createContext, useContext, useState} from "react";

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
}

const TelemetryContext = createContext<TelemetryContextType | undefined>(undefined);

export const TelemetryProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
   const [telemetryData, setTelemetryData] = useState<TelemetryData | null>(null);

   return (
      <TelemetryContext.Provider value={{telemetryData, setTelemetryData}}>
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
