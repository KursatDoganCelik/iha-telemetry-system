import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import {useTelemetry} from "../../context/TelemetryContext.tsx";
import type {LatLngExpression, LatLngTuple} from "leaflet";
import L from "leaflet";

const startIcon = L.icon({
   iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png",
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});

const currentIcon = L.icon({
   iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});

const targetIcon = L.icon({
   iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
   iconSize: [32, 32],
   iconAnchor: [16, 32],
   popupAnchor: [0, -32],
});

const MapView: React.FC = () => {
   const {telemetryData} = useTelemetry();

   const defaultCenter: LatLngExpression = [39.5, 38];

   const start: LatLngTuple | null = telemetryData
      ? [telemetryData.startLatitude, telemetryData.startLongitude]
      : null;

   const current: LatLngTuple | null = telemetryData
      ? [telemetryData.currentLatitude, telemetryData.currentLongitude]
      : null;

   const target: LatLngTuple | null =
      telemetryData?.targetLatitude && telemetryData?.targetLongitude
         ? [telemetryData.targetLatitude, telemetryData.targetLongitude]
         : null;

   return (
      <div className="w-full h-full">
         <MapContainer
            center={current ?? defaultCenter}
            zoom={6}
            className="h-full w-full rounded-lg shadow"
         >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution="&copy; OpenStreetMap contributors"
            />

            {start && (
               <Marker position={start} icon={startIcon}>
                  <Popup>Başlangıç Konumu</Popup>
               </Marker>
            )}

            {current && (
               <Marker position={current} icon={currentIcon}>
                  <Popup>Şu Anki Konum<br/>ID: {telemetryData?.ihaId}</Popup>
               </Marker>
            )}

            {target && (
               <Marker position={target} icon={targetIcon}>
                  <Popup>Hedef Noktası</Popup>
               </Marker>
            )}

            {start && current && (
               <Polyline
                  positions={[start, current]}
                  color="gray"
                  weight={3}
                  opacity={0.7}
               />
            )}

            {current && target && (
               <Polyline
                  positions={[current, target]}
                  color="blue"
                  weight={3}
                  dashArray="8, 8"
                  opacity={0.7}
               />
            )}

         </MapContainer>
      </div>
   );
};

export default MapView;
