import React from "react";
import {Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {useTelemetry} from "../../context/TelemetryContext.tsx";

const TelemetryCharts: React.FC = () => {
   const {telemetryData: data} = useTelemetry();

   if (!data) {
      return (
         <div className="bg-white shadow rounded-lg p-4 w-96">
            <h2 className="text-lg font-semibold mb-2">📊 Telemetry Bilgisi</h2>
            <p className="text-gray-500">Henüz veri yok</p>
         </div>
      );
   }

   const metrics = [
      {name: "Batarya", value: data.battery, color: "#10b981", unit: "%", domain: [0, 100]},
      {name: "Hız", value: data.speed, color: "#3b82f6", unit: "m/s", domain: [0, 100]},
      {name: "İrtifa", value: data.altitude, color: "#6366f1", unit: "m", domain: [0, 5000]},
      {name: "Görev", value: data.missionProgress ?? 0, color: "#a855f7", unit: "%", domain: [0, 100]},
   ];

   return (
      <div className="bg-white shadow rounded-lg px-2 w-90">
         <p className="text-sm text-center font-medium p-2">İHA No: {data.ihaId}</p>

         <div className="flex flex-col gap-2">
            {metrics.map((metric, id) => (
               <div key={id} className="w-full h-14">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart
                        data={[metric]}
                        layout="vertical"
                        margin={{top: 5, right: 20, left: 10, bottom: 5}}
                     >
                        <XAxis type="number" domain={metric.domain}/>
                        <YAxis type="category" dataKey="name"/>
                        <Tooltip formatter={(val: number) => `${val} ${metric.unit}`}/>
                        <Bar dataKey="value" barSize={10}>
                           <Cell fill={metric.color}/>
                           <LabelList
                              dataKey="value"
                              position="right"
                              content={({value}) =>
                                 value !== undefined ? `${value} ${metric.unit}` : ""
                              }
                           />
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TelemetryCharts;
