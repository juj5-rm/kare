import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./login.module.css";
import { LoginPageProps } from "../../interfaces/LoginPageProps.interface";
import InputField from "@/components/inputField/inputField";
import { handleLogin } from "@/services/auth.service";


const LoginPage: React.FC<LoginPageProps> = ({ initialView = "login" }) => {
    const router = useRouter();
    const viewFromQuery = router.query.view as "login" | "register";

    // Estado para manejar la vista activa
    const [isActive, setIsActive] = useState(initialView === "register");

    // Estado para manejar los datos del formulario
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        usuario: '',
        contraseña: ''
    });

    // Actualizar estado cuando la URL cambia
    useEffect(() => {
        if (viewFromQuery) {
            setIsActive(viewFromQuery === "register");
        }
    }, [viewFromQuery]);


    // Manejar cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex items-center justify-center h-[90vh]">
            <div className={`w-[60%] h-[90%] relative bg-sigca-white rounded-[30px] overflow-hidden ${isActive ? styles.active : ""} ${styles.container}`}>
                {/* Login Form */}
                <div className={`${styles["form-box"]} ${styles.login}`}>
                    <form className={`${styles.form} flex flex-col items-center justify-center`} onSubmit={(e) => handleLogin(e, formData)}>
                        <h2 className="font-jura text-center">Iniciar sesión</h2>
                        <InputField label="Usuario:" type="text" value={formData.usuario} name="usuario" icon="/profile.svg" iconSize={20} onChange={handleChange} />
                        <InputField label="Contraseña:" type="password" value={formData.contraseña} name="contraseña" onChange={handleChange} />
                        <div className={`${styles["forgot-link"]} justify-center w-full items-center`}>
                            <a href="/forgot-password" className="text-center">¿Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" className="text-sigca-white bg-sigca-blue font-roboto font-bold py-1 px-4 rounded-lg mb-0 mt-[3vh] hover:bg-sigca-contraste w-fit">
                            Iniciar sesión
                        </button>
                    </form>
                </div>

                {/* Register Form */}
                <div className={`${styles["form-box"]} ${styles.register}`}>
                    <form className={`${styles.form} flex flex-col items-center justify-center`} action="/register" method="post">
                        <h2 className="font-jura text-center mb-5">Registro</h2>
                        <InputField label="Nombre de usuario:" type="text" value={formData.username} name="username" icon="/profile.svg" iconSize={20} onChange={handleChange} />
                        <InputField label="Correo electrónico:" type="email" value={formData.email} name="email" icon="/email.svg" iconSize={20} onChange={handleChange} />
                        <InputField label="Contraseña:" type="password" value={formData.password} name="password" onChange={handleChange} />
                        <button type="submit" className="text-sigca-white bg-sigca-blue font-roboto font-bold py-1 px-4 rounded-lg mb-2 mt-2 hover:bg-sigca-contraste w-fit">
                            Registrar
                        </button>
                    </form>
                </div>

                {/* Toggle Panels */}
                <div className={styles["toggle-box"]}>
                    <div className={`${styles["toggle-panel"]} ${styles["toggle-login-left"]}`}>
                        <h2 className="font-jura">Hola, Bienvenido!</h2>
                        <p className="font-roboto">¿No tienes una cuenta?</p>
                        <button
                            onClick={() => router.push("/login?view=register")}
                            className={`${styles.btn} ${styles["register-btn"]} hover:bg-sigca-white hover:text-sigca-black`}
                        >
                            Registro
                        </button>
                    </div>
                    <div className={`${styles["toggle-panel"]} ${styles["toggle-register-right"]}`}>
                        <h2 className="font-jura">¡Bienvenido de nuevo!</h2>
                        <p className="font-roboto">¿Ya tienes una cuenta?</p>
                        <button
                            onClick={() => router.push("/login?view=login")}
                            className={`${styles.btn} ${styles["login-btn"]} hover:bg-sigca-white hover:text-sigca-black`}
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LoginPage;
