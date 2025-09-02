import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MapView from "../components/MapView/MapView";
import TelemetryCharts from "../components/Charts/TelemetryCharts";

const Dashboard: React.FC = () => {
   return (
      <div className="flex">
         <Sidebar/>

         <div className="flex-1 relative h-screen bg-gray-100">
            <MapView/>

            <div className="absolute top-4 right-4 z-[404]">
               <TelemetryCharts/>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
