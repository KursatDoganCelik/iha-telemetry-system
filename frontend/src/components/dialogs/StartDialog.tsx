import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import React from "react";

interface StartDialogProps {
   isOpen: boolean;
   ihaId: string;
   onChange: (value: string) => void;
   onClose: () => void;
   onConfirm: () => void;
}

const StartDialog: React.FC<StartDialogProps> = (
   {
      isOpen,
      ihaId,
      onChange,
      onClose,
      onConfirm,
   }) => {
   return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-[2000]">
         <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
         <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow">
               <DialogTitle className="text-lg font-bold mb-4">
                  Simülasyonu Başlat
               </DialogTitle>

               <input
                  type="text"
                  value={ihaId}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="İHA ID girin"
                  className="w-full mb-4 rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
               />

               <div className="flex justify-end gap-2">
                  <button
                     onClick={onClose}
                     className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 cursor-pointer"
                  >
                     İptal
                  </button>
                  <button
                     onClick={onConfirm}
                     className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer"
                  >
                     Başlat
                  </button>
               </div>
            </DialogPanel>
         </div>
      </Dialog>
   );
};

export default StartDialog;
