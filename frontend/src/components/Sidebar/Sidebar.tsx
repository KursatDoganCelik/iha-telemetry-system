import React, {useState} from "react";
import {FiMenu} from "react-icons/fi";
import SidebarButtons from "./SidebarButtons";
import {useTelemetryActions} from "../../actions/telemetryActions.ts";
import {initialForm, initialTarget, type TargetForm, type TelemetryForm} from "../../types/types.ts";
import SidebarDialogs from "./SidebarDialogs.tsx";

const Sidebar: React.FC = () => {
   const {handleAddIha, handleStop} = useTelemetryActions();
   const [isOpen, setIsOpen] = useState(true);

   const [isDeleteOpen, setIsDeleteOpen] = useState(false);
   const [ihaId, setIhaId] = useState("");

   const [isCreateOpen, setIsCreateOpen] = useState(false);
   const [form, setForm] = useState<TelemetryForm>(initialForm);
   const clearForm = () => setForm(initialForm);

   const [isDestOpen, setIsDestOpen] = useState(false);
   const [destIhaId, setDestIhaId] = useState("");
   const [target, setTarget] = useState<TargetForm>(initialTarget);
   const clearTarget = () => {
      setDestIhaId("");
      setTarget(initialTarget);
   };

   const [isGetOpen, setIsGetOpen] = useState(false);
   const [getIhaId, setGetIhaId] = useState("");
   const clearGet = () => setGetIhaId("");

   const [isStartOpen, setIsStartOpen] = useState(false);
   const [startIhaId, setStartIhaId] = useState("");
   const clearStart = () => setStartIhaId("");

   return (
      <div className="relative">
         <button
            className={`${
               isOpen ? "left-52" : "left-4"
            } absolute top-4 z-[1001] bg-blue-500 text-white cursor-pointer p-2 rounded-md shadow transition-all duration-300`}
            onClick={() => setIsOpen(!isOpen)}
         >
            <FiMenu size={20}/>
         </button>

         <div
            className={`${
               isOpen ? "w-64" : "w-16"
            } h-screen bg-white text-gray-800 flex flex-col border-r border-gray-200 shadow transition-all duration-300 overflow-hidden`}
         >
            <div className="p-4 text-xl font-bold border-b border-gray-200 bg-gray-50">
               İHA Paneli
            </div>

            <SidebarButtons
               onAddRandom={handleAddIha}
               onAdd={() => setIsCreateOpen(true)}
               onDelete={() => setIsDeleteOpen(true)}
               onSetDest={() => setIsDestOpen(true)}
               onGet={() => setIsGetOpen(true)}
               onStart={() => setIsStartOpen(true)}
               onStop={handleStop}
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
            isDestOpen={isDestOpen}
            destIhaId={destIhaId}
            setDestIhaId={setDestIhaId}
            target={target}
            setTarget={setTarget}
            setIsDestOpen={setIsDestOpen}
            clearTarget={clearTarget}
            isGetOpen={isGetOpen}
            getIhaId={getIhaId}
            setGetIhaId={setGetIhaId}
            setIsGetOpen={setIsGetOpen}
            clearGet={clearGet}
            isStartOpen={isStartOpen}
            startIhaId={startIhaId}
            setStartIhaId={setStartIhaId}
            setIsStartOpen={setIsStartOpen}
            clearStart={clearStart}
         />
      </div>
   );
};

export default Sidebar;
