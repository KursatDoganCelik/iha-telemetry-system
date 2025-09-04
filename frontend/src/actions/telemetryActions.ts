import {
   addRandomIha,
   createTelemetry,
   deleteTelemetryById,
   getActiveTelemetry,
   getTelemetryById,
   startTelemetry,
   stopTelemetry,
   updateDestination,
} from "../services/telemetryService";
import toast from "react-hot-toast";
import {useTelemetry} from "../context/TelemetryContext";

export const useTelemetryActions = () => {
   const {setTelemetryData} = useTelemetry();

   const handleAddIha = async () => {
      try {
         const data = await addRandomIha();
         toast.success(`İHA eklendi (ID: ${data.ihaId})`);
         setTelemetryData(data);
      } catch {
         toast.error("İHA eklenemedi");
      }
   };

   const handleDeleteIha = async (ihaId: string) => {
      if (!ihaId) {
         toast.error("Lütfen bir İHA ID girin");
         return;
      }

      try {
         await deleteTelemetryById(Number(ihaId));
         toast.success(`İHA silindi (ID: ${ihaId})`);
         setTelemetryData(null);
      } catch {
         toast.error("İHA silinemedi");
      }
   };

   const handleCreateTelemetry = async (
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
         setTelemetryData(data);
         closeModal();
         clearForm();
      } catch {
         toast.error("Telemetry eklenemedi");
      }
   };

   const handleSetDestination = async (
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
         const data = await updateDestination(Number(ihaId), {
            targetLatitude: parseFloat(targetLatitude),
            targetLongitude: parseFloat(targetLongitude),
         });
         toast.success(`Hedef atandı (İHA ID: ${ihaId})`);
         setTelemetryData(data);
         clearTarget();
         onClose();
      } catch {
         toast.error("Hedef atanamadı");
      }
   };

   const handleGetTelemetry = async (
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
         toast.success(`İHA bulundu (ID: ${ihaId})`);
         setTelemetryData(data);
         clear();
         onClose();
      } catch {
         toast.error("Telemetry alınamadı");
      }
   };

   const handleStart = async (ihaId: string, onClose: () => void, clear: () => void) => {
      if (!ihaId) {
         toast.error("İHA ID girilmelidir");
         return;
      }

      try {
         await startTelemetry(Number(ihaId));
         toast.success(`Simülasyon başlatıldı (ID: ${ihaId})`);
         setTelemetryData(await getActiveTelemetry())
         clear();
         onClose();
      } catch {
         toast.error("Simülasyon başlatılamadı");
      }
   };

   const handleStop = async () => {
      try {
         await stopTelemetry();
         setTelemetryData(null);   // 🔹 aktif veriyi temizle
         toast.success("Simülasyon durduruldu");
      } catch {
         toast.error("Simülasyon durdurulamadı");
      }
   };
   return {
      handleAddIha,
      handleDeleteIha,
      handleCreateTelemetry,
      handleSetDestination,
      handleGetTelemetry,
      handleStart,
      handleStop
   };
};
