import React from "react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const mockData = [
   {time: "10:00", battery: 90, speed: 45, altitude: 500},
   {time: "10:05", battery: 85, speed: 50, altitude: 550},
   {time: "10:10", battery: 80, speed: 48, altitude: 600},
];

const TelemetryCharts: React.FC = () => {
   return (
      <div className="bg-white shadow rounded-lg p-4 w-96 h-64">
         <h2 className="text-lg font-semibold mb-2">📊 Telemetry Grafiği</h2>
         <ResponsiveContainer width="100%" height="90%">
            <LineChart data={mockData}>
               <XAxis dataKey="time"/>
               <YAxis/>
               <Tooltip/>
               <Line type="monotone" dataKey="battery" stroke="#ef4444"/>
               <Line type="monotone" dataKey="speed" stroke="#3b82f6"/>
               <Line type="monotone" dataKey="altitude" stroke="#10b981"/>
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};

export default TelemetryCharts;
