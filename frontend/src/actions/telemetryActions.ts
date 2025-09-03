import {
   addRandomIha,
   createTelemetry,
   deleteTelemetryById,
   getTelemetryById,
   updateDestination
} from "../services/telemetryService";
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

export const handleSetDestination = async (
   ihaId: string,
   targetLatitude: string,
   targetLongitude: string,
   onClose: () => void,
   clearTarget: () => void
) => {
   if (!ihaId || !targetLatitude || !targetLongitude) {
      toast.error("Tüm alanlar doldurulmalıdır");
      return;
   }

   try {
      await updateDestination(Number(ihaId), {
         targetLatitude: parseFloat(targetLatitude),
         targetLongitude: parseFloat(targetLongitude),
      });
      toast.success(`Hedef atandı (İHA ID: ${ihaId})`);
      clearTarget();
      onClose();
   } catch {
      toast.error("Hedef atanamadı");
   }
};

export const handleGetTelemetry = async (
   ihaId: string,
   onClose: () => void,
   clear: () => void
) => {
   if (!ihaId) {
      toast.error("İHA ID girilmelidir");
      return;
   }

   try {
      const data = await getTelemetryById(Number(ihaId));
      console.log("Telemetry verisi:", data);
      toast.success(`İHA bulundu (ID: ${ihaId})`);
      clear();
      onClose();
      return data;
   } catch {
      toast.error("Telemetry alınamadı");
   }
};
