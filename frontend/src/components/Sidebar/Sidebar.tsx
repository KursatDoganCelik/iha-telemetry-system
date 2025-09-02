import React, {useState} from "react";
import {FiMenu} from "react-icons/fi";

const Sidebar: React.FC = () => {
   const [isOpen, setIsOpen] = useState(true);

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

            <div>
               Sidebar İçeriği eklenecek.
            </div>

         </div>
      </div>
   );
};

export default Sidebar;
