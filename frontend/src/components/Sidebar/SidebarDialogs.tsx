import React from "react";
import DeleteIhaDialog from "../dialogs/DeleteIhaDialog";
import CreateTelemetryDialog from "../dialogs/CreateTelemetryDialog";
import type {TelemetryForm} from "../../types/types.ts";
import {handleCreateTelemetry, handleDeleteIha} from "../../actions/telemetryActions.ts";

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

      </>
   );
};

export default SidebarDialogs;
