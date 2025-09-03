import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import type {LatLngExpression} from "leaflet";
import {useTelemetry} from "../../context/TelemetryContext.tsx";

const MapView: React.FC = () => {
   const {telemetryData} = useTelemetry();

   const defaultCenter: LatLngExpression = [39.5, 38];

   const ihaPosition: LatLngExpression | null = telemetryData
      ? [telemetryData.currentLatitude, telemetryData.currentLongitude]
      : null;

   return (
      <div className="w-full h-full">
         <MapContainer
            center={defaultCenter}
            zoom={6}
            className="h-full w-full rounded-lg shadow"
         >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution="&copy; OpenStreetMap contributors"
            />

            {ihaPosition && (
               <>
                  <Marker position={ihaPosition}>
                     <Popup>
                        📍 İHA Konumu<br/>
                        ID: {telemetryData?.ihaId}
                     </Popup>
                  </Marker>
               </>
            )}
         </MapContainer>
      </div>
   );
};

export default MapView;
