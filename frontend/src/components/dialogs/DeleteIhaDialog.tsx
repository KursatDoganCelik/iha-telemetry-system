import React from "react";
import {Button, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";

interface DeleteIhaDialogProps {
   isOpen: boolean;
   ihaId: string;
   onChange: (value: string) => void;
   onClose: () => void;
   onConfirm: () => void;
}

const DeleteIhaDialog: React.FC<DeleteIhaDialogProps> = ({
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
               <DialogTitle className="text-lg font-semibold mb-4">İHA Sil</DialogTitle>
               <input
                  type="number"
                  value={ihaId}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="İHA ID girin"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-red-400"
               />
               <div className="flex justify-end gap-2">
                  <Button
                     onClick={onClose}
                     className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                  >
                     Vazgeç
                  </Button>
                  <Button
                     onClick={onConfirm}
                     className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                  >
                     Sil
                  </Button>
               </div>
            </DialogPanel>
         </div>
      </Dialog>
   );
};

export default DeleteIhaDialog;
