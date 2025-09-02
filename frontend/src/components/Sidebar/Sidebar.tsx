import React, {useState} from "react";
import {FiMenu} from "react-icons/fi";
import {addRandomIha} from "../../services/telemetryService.ts";
import {Button} from "@headlessui/react";

const Sidebar: React.FC = () => {
   const [isOpen, setIsOpen] = useState(true);

   const handleAddIha = async () => {
      try {
         const data = await addRandomIha();
         alert(`✅ Yeni İHA eklendi (ID: ${data.ihaId})`);
      } catch (error) {
         alert("❌ İHA eklenemedi");
      }
   };

   return (
      <div className="relative">
         <button
            className={`${
               isOpen ? "left-52" : "left-4"} 
               absolute top-4 z-[1001] bg-gray-700 text-white p-2 rounded-md transition-all duration-300 overflow-hidden`}
            onClick={() => setIsOpen(!isOpen)}
         >
            <FiMenu size={20}/>
         </button>

         <div
            className={`${
               isOpen ? "w-64" : "w-16"
            } h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 overflow-hidden`}
         >
            <div className="p-4 text-xl font-bold border-b border-gray-700">
               İHA Paneli
            </div>

            <div className="flex flex-col gap-2 p-4">
               <Button
                  onClick={handleAddIha}
                  className="w-full rounded-lg bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-blue-700 hover:ring-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition"
               >
                  ➕ İHA Ekle
               </Button>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
