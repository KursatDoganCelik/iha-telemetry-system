import React, {useState} from "react";
import {FiMenu} from "react-icons/fi";
import SidebarButtons from "./SidebarButtons";
import {handleAddIha} from "../../actions/telemetryActions.ts";
import {initialForm, type TelemetryForm} from "../../types/types.ts";
import SidebarDialogs from "./SidebarDialogs.tsx";

const Sidebar: React.FC = () => {
   const [isOpen, setIsOpen] = useState(true);

   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [ihaId, setIhaId] = useState("");

   const [isCreateOpen, setIsCreateOpen] = useState(false);
   const [form, setForm] = useState<TelemetryForm>(initialForm);
   const clearForm = () => setForm(initialForm);

   return (
      <div className="relative">
         <button
            className={`${
               isOpen ? "left-52" : "left-4"
            } absolute top-4 z-[1001] bg-gray-700 text-white cursor-pointer p-2 rounded-md transition-all duration-300 overflow-hidden`}
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

            <SidebarButtons
               onAddRandom={handleAddIha}
               onAdd={() => setIsCreateOpen(true)}
               onDelete={() => setIsDeleteOpen(true)}
            />
         </div>

         <SidebarDialogs
            isDeleteOpen={isDeleteOpen}
            ihaId={ihaId}
            setIhaId={setIhaId}
            setIsDeleteOpen={setIsDeleteOpen}
            isCreateOpen={isCreateOpen}
            form={form}
            setForm={setForm}
            setIsCreateOpen={setIsCreateOpen}
            clearForm={clearForm}
         />
      </div>
   );
};

export default Sidebar;
