import React, { useState } from "react";
import Image from "next/image";
import style from "./soporte.module.css";
import InputField from "@/components/inputField/inputField";
import { EmailService } from "@/services/email.service"; // Importar el servicio

const Soporte: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const message = await EmailService.sendEmail(formData.nombre, formData.correo, formData.mensaje);
    setStatus(message);

    if (message === "Correo enviado exitosamente") {
      setFormData({ nombre: "", correo: "", mensaje: "" });
      window.alert(message);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center bg-gris-soporte">
      <div className="w-[70%] h-screen py-8 flex items-center justify-center">
        <div className="w-1/3 h-full flex-col flex justify-between mr-4">
          <div className="ubicacion w-full h-[37%] border-white border-2 rounded-lg mb-2 p-4 flex-col flex">
            <Image src="/gps.svg" alt="Ubicación" width={20} height={30} />
            <div className="flex flex-col">
              <h2 className={`text-white ${style.contenido} font-extrabold mt-2`}>Oficina</h2>
              <p className={`text-white ${style.contenido} mt-2`}>Cra. 10 #48 167, Pereira, Risaralda</p>
            </div>
            <div className="flex flex-col mb-2 mt-auto">
              <h3 className={`text-white ${style.contenido} font-extrabold`}>Horario</h3>
              <p className={`text-white ${style.contenido} mt-2`}>Lunes a Viernes 8:00 am - 5:00 pm</p>
            </div>
          </div>
          <div className="correo w-full h-[30%] border-white border-2 rounded-lg mb-2 p-4 flex-col flex">
            <Image src="/email.svg" alt="Correo" width={30} height={40} />
            <div className="flex flex-col">
              <h2 className={`text-white ${style.contenido} font-extrabold my-2`}>Correo</h2>
              <p className={`text-white ${style.contenido}`}>
                <a href="mailto:jovenes@asocentral.org">atencionalcliente@kare.org</a>
              </p>
              <p className={`text-white ${style.contenido}`}>
                <a href="mailto:contactosigca@gmail.com">soporte@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="telefono w-full h-[20%] border-white border-2 rounded-lg p-4 flex-col flex">
            <Image src="/telefono.svg" alt="Teléfono" width={20} height={30} />
            <div className="flex flex-col">
              <h2 className={`text-white ${style.contenido} font-extrabold my-2`}>Teléfono</h2>
              <p className={`text-white ${style.contenido}`}>
                <a href="tel:+573213984462">K.A.R.E: +57 321 398 44 62</a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[100%] bg-sigca-white rounded-lg ml-4 p-6 flex flex-col">
          <h2 className={`${style.title} font-roboto font-extrabold text-sigca-black`}>
            Tus sugerencias nos ayudan a mejorar
          </h2>
          <p className="text-[0.9vw] my-2">
            Estamos en una etapa de aprendizaje y optimización de nuestra plataforma para brindarte la mejor experiencia, déjanos tus comentarios.
          </p>
          <form onSubmit={handleSubmit} className="form mt-2 flex flex-col h-full justify-center items-center">
            <InputField label="Nombre:" type="text" name="nombre" value={formData.nombre} onChange={handleChange} icon="/profile.svg" iconSize={20} />
            <InputField label="Correo electrónico:" type="email" name="correo" value={formData.correo} onChange={handleChange} icon="/email.svg" iconSize={24} />
            <InputField label="Mensaje:" type="textarea" name="mensaje" value={formData.mensaje} onChange={handleChange} />
            <button type="submit" className="text-sigca-white bg-sigca-blue font-roboto font-bold py-1 px-4 rounded-lg mb-4 mt-auto hover:bg-sigca-contraste w-[30%]">
              Enviar
            </button>
          </form>

          {status && <p className="text-white font-roboto mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Soporte;
