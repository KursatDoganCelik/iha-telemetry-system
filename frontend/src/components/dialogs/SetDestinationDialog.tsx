import React from "react";
import {Button, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import type {TargetForm} from "../../types/types.ts";

interface SetDestinationDialogProps {
   isOpen: boolean;
   ihaId: string;
   target: TargetForm;
   onChangeId: (value: string) => void;
   onChangeTarget: (
      field: "targetLatitude" | "targetLongitude",
      value: string
   ) => void;
   onClose: () => void;
   onConfirm: () => void;
}

const SetDestinationDialog: React.FC<SetDestinationDialogProps> = ({
                                                                      isOpen,
                                                                      ihaId,
                                                                      target,
                                                                      onChangeId,
                                                                      onChangeTarget,
                                                                      onClose,
                                                                      onConfirm,
                                                                   }) => {
   return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-[2000]">
         <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
         <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
               <DialogTitle className="text-lg font-semibold mb-4">
                  Hedef Konum Belirle
               </DialogTitle>

               <div className="flex flex-col gap-3">
                  <input
                     type="number"
                     placeholder="İHA ID"
                     value={ihaId}
                     onChange={(e) => onChangeId(e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                     type="number"
                     placeholder="Hedef Latitude"
                     value={target.targetLatitude}
                     onChange={(e) =>
                        onChangeTarget("targetLatitude", e.target.value)
                     }
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                     type="number"
                     placeholder="Hedef Longitude"
                     value={target.targetLongitude}
                     onChange={(e) =>
                        onChangeTarget("targetLongitude", e.target.value)
                     }
                     className="w-full rounded-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                     className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
                  >
                     Kaydet
                  </Button>
               </div>
            </DialogPanel>
         </div>
      </Dialog>
   );
};

export default SetDestinationDialog;
