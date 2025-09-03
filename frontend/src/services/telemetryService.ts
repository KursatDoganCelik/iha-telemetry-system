export const addRandomIha = async () => {
   const response = await fetch("http://localhost:8080/api/telemetry/random", {
      method: "POST",
   });

   if (!response.ok) {
      throw new Error("İHA eklenemedi");
   }

   return response.json();
};

export const deleteTelemetryById = async (ihaId: number) => {
   const response = await fetch(`http://localhost:8080/api/telemetry/${ihaId}`, {
      method: "DELETE",
   });
   if (!response.ok) throw new Error("İHA silinemedi");
   return true;
};

export const createTelemetry = async (telemetry: {
   currentLatitude: number;
   currentLongitude: number;
   altitude: number;
   speed: number;
   battery: number;
}) => {
   const response = await fetch("http://localhost:8080/api/telemetry", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(telemetry),
   });
   if (!response.ok) throw new Error("Telemetry eklenemedi");
   return response.json();
};
