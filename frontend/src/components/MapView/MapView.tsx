import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import type {LatLngExpression} from "leaflet";

const MapView: React.FC = () => {
   const ankara: LatLngExpression = [39.9208, 32.8541]; // Ankara

   return (
      <div className="w-full h-full">
         <MapContainer center={[39, 35]} zoom={6} className="h-full w-full rounded-lg shadow">
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={ankara}>
               <Popup>📍 Örnek İHA konumu</Popup>
            </Marker>
         </MapContainer>
      </div>
   );
};

export default MapView;

