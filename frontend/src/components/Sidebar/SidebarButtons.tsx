import React from "react";
import {Button} from "@headlessui/react";

interface SidebarButtonsProps {
   onAddRandom: () => void;
   onAdd: () => void;
   onDelete: () => void;
   onSetDest: () => void;
}

const SidebarButtons: React.FC<SidebarButtonsProps> = ({
                                                          onAddRandom,
                                                          onAdd,
                                                          onDelete,
                                                          onSetDest
                                                       }) => {
   return (
      <div className="flex flex-col gap-2 p-4">
         <Button
            onClick={onAddRandom}
            className="w-full rounded-lg bg-blue-600 py-2 px-4 cursor-pointer text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-500 hover:bg-blue-700 hover:ring-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition"
         >
            Random İHA Ekle
         </Button>

         <Button
            onClick={onAdd}
            className="w-full rounded-lg bg-green-600 py-2 px-4 cursor-pointer text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-green-500 hover:bg-green-700 hover:ring-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition"
         >
            İHA Ekle
         </Button>

         <Button
            onClick={onDelete}
            className="w-full rounded-lg bg-red-600 py-2 px-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-500 hover:bg-red-700 hover:ring-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition cursor-pointer"
         >
            İHA Sil
         </Button>

         <Button
            onClick={onSetDest}
            className="w-full rounded-lg bg-indigo-600 py-2 px-4 cursor-pointer text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-indigo-500 hover:bg-indigo-700 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition"
         >
            Hedef Belirle
         </Button>
      </div>
   );
};

export default SidebarButtons;
