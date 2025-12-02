
export const EmailService = {
    async sendEmail(nombre: string, correo: string, mensaje: string): Promise<string> {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nombre,
            email: correo,
            message: mensaje,
          }),
        });
  
        if (response.ok) {
          return "Correo enviado exitosamente";
        } else {
          return "Hubo un error al enviar el correo";
        }
      } catch (error) {
        console.error("Error en la solicitud", error);
        return "Error en la solicitud, por favor intenta más tarde.";
      }
    },
  };
  