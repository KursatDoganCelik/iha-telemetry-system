export const addRandomIha = async () => {
   const response = await fetch("http://localhost:8080/api/telemetry/random", {
      method: "POST",
   });

   if (!response.ok) {
      throw new Error("İHA eklenemedi");
   }

   return response.json();
};
