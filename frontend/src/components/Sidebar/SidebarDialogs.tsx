import React from "react";
import DeleteIhaDialog from "../dialogs/DeleteIhaDialog";
import CreateTelemetryDialog from "../dialogs/CreateTelemetryDialog";
import type {TargetForm, TelemetryForm} from "../../types/types.ts";
import {handleCreateTelemetry, handleDeleteIha, handleSetDestination} from "../../actions/telemetryActions.ts";
import SetDestinationDialog from "../dialogs/SetDestinationDialog.tsx";

interface SidebarDialogsProps {
   isDeleteOpen: boolean;
   ihaId: string;
   setIhaId: (id: string) => void;
   setIsDeleteOpen: (open: boolean) => void;

   isCreateOpen: boolean;
   form: TelemetryForm;
   setForm: (form: TelemetryForm) => void;
   setIsCreateOpen: (open: boolean) => void;
   clearForm: () => void;

   isDestOpen: boolean;
   destIhaId: string;
   setDestIhaId: (id: string) => void;
   target: TargetForm;
   setTarget: (target: TargetForm) => void;
   setIsDestOpen: (open: boolean) => void;
   clearTarget: () => void;
}

const SidebarDialogs: React.FC<SidebarDialogsProps> = ({
                                                          isDeleteOpen,
                                                          ihaId,
                                                          setIhaId,
                                                          setIsDeleteOpen,
                                                          isCreateOpen,
                                                          form,
                                                          setForm,
                                                          setIsCreateOpen,
                                                          clearForm,
                                                          isDestOpen,
                                                          destIhaId,
                                                          setDestIhaId,
                                                          target,
                                                          setTarget,
                                                          setIsDestOpen,
                                                          clearTarget,
                                                       }) => {
   return (
      <>
         <DeleteIhaDialog
            isOpen={isDeleteOpen}
            ihaId={ihaId}
            onChange={setIhaId}
            onClose={() => setIsDeleteOpen(false)}
            onConfirm={() => {
               handleDeleteIha(ihaId);
               setIsDeleteOpen(false);
               setIhaId("");
            }}
         />

         <CreateTelemetryDialog
            isOpen={isCreateOpen}
            form={form}
            onChange={(field, value) => setForm({...form, [field]: value})}
            onClose={() => setIsCreateOpen(false)}
            onConfirm={() => {
               handleCreateTelemetry(form, () => setIsCreateOpen(false), clearForm);
            }}
         />

         <SetDestinationDialog
            isOpen={isDestOpen}
            ihaId={destIhaId}
            target={target}
            onChangeId={setDestIhaId}
            onChangeTarget={(field, value) =>
               setTarget({...target, [field]: value})
            }
            onClose={() => setIsDestOpen(false)}
            onConfirm={() =>
               handleSetDestination(
                  destIhaId,
                  target.targetLatitude,
                  target.targetLongitude,
                  () => setIsDestOpen(false),
                  clearTarget
               )
            }
         />


      </>
   );
};

export default SidebarDialogs;
