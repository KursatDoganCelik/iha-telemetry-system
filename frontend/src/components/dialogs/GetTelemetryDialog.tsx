import React from "react";
import {Button, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";

interface GetTelemetryDialogProps {
   isOpen: boolean;
   ihaId: string;
   onChange: (value: string) => void;
   onClose: () => void;
   onConfirm: () => void;
}

const GetTelemetryDialog: React.FC<GetTelemetryDialogProps> = (
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
            <DialogPanel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
               <DialogTitle className="text-lg font-semibold mb-4">
                  Telemetry Getir
               </DialogTitle>

               <input
                  type="number"
                  placeholder="İHA ID"
                  value={ihaId}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
               />

               <div className="flex justify-end gap-2 mt-4">
                  <Button
                     onClick={onClose}
                     className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                  >
                     Vazgeç
                  </Button>
                  <Button
                     onClick={onConfirm}
                     className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                  >
                     Getir
                  </Button>
               </div>
            </DialogPanel>
         </div>
      </Dialog>
   );
};

export default GetTelemetryDialog;
