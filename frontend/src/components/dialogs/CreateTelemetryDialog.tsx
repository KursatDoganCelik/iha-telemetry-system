import React from "react";
import {Button, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";

interface CreateTelemetryDialogProps {
   isOpen: boolean;
   form: {
      currentLatitude: string;
      currentLongitude: string;
      altitude: string;
      speed: string;
      battery: string;
   };
   onChange: (field: string, value: string) => void;
   onClose: () => void;
   onConfirm: () => void;
}

const CreateTelemetryDialog: React.FC<CreateTelemetryDialogProps> = ({
                                                                        isOpen,
                                                                        form,
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
                  Yeni Telemetry Ekle
               </DialogTitle>

               <div className="flex flex-col gap-3">
                  <input
                     type="number"
                     placeholder="Latitude"
                     value={form.currentLatitude}
                     onChange={(e) => onChange("currentLatitude", e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <input
                     type="number"
                     placeholder="Longitude"
                     value={form.currentLongitude}
                     onChange={(e) => onChange("currentLongitude", e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <input
                     type="number"
                     placeholder="Altitude"
                     value={form.altitude}
                     onChange={(e) => onChange("altitude", e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <input
                     type="number"
                     placeholder="Speed"
                     value={form.speed}
                     onChange={(e) => onChange("speed", e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <input
                     type="number"
                     placeholder="Battery"
                     value={form.battery}
                     onChange={(e) => onChange("battery", e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
               </div>

               <div className="flex justify-end gap-2 mt-4">
                  <Button
                     onClick={onClose}
                     className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                  >
                     Vazgeç
                  </Button>
                  <Button
                     onClick={onConfirm}
                     className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                  >
                     Ekle
                  </Button>
               </div>
            </DialogPanel>
         </div>
      </Dialog>
   );
};

export default CreateTelemetryDialog;
