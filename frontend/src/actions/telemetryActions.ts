import {addRandomIha, createTelemetry, deleteTelemetryById} from "../services/telemetryService";
import toast from "react-hot-toast";

export const handleAddIha = async () => {
   try {
      const data = await addRandomIha();
      toast.success(`İHA eklendi (ID: ${data.ihaId})`);
   } catch {
      toast.error("İHA eklenemedi");
   }
};

export const handleDeleteIha = async (ihaId: string) => {
   if (!ihaId) {
      toast.error("Lütfen bir İHA ID girin");
      return;
   }

   try {
      await deleteTelemetryById(Number(ihaId));
      toast.success(`İHA silindi (ID: ${ihaId})`);
   } catch {
      toast.error("İHA silinemedi");
   }
};

export const handleCreateTelemetry = async (
   telemetryData: {
      currentLatitude: string;
      currentLongitude: string;
      altitude: string;
      speed: string;
      battery: string;
   },
   closeModal: () => void,
   clearForm: () => void
) => {
   try {
      const data = await createTelemetry({
         currentLatitude: Number(telemetryData.currentLatitude),
         currentLongitude: Number(telemetryData.currentLongitude),
         altitude: Number(telemetryData.altitude),
         speed: Number(telemetryData.speed),
         battery: Number(telemetryData.battery),
      });
      toast.success(`Telemetry eklendi (ID: ${data.ihaId})`);
      closeModal();
      clearForm();
   } catch {
      toast.error("Telemetry eklenemedi");
   }
};
