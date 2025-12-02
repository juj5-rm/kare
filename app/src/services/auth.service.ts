export const loginUser = async (username: string, password: string) => {
    try {
        const response = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            window.alert("Credenciales incorrectas");
            return null;
        }

        const data = await response.json();
        
        // Guardar clubid en sessionStorage
        sessionStorage.setItem("clubid", data.user?.data?.clubid);

        return {
            clubid: data.user?.data?.clubid,
            clubcategory: data.user?.data?.clubcategory
        };
    } catch (error) {
        console.error("Error en el login:", error);
        return null;
    }
};


export const handleLogin = async (event: React.FormEvent<HTMLFormElement>, formData: { usuario: string; contraseña: string }) => {
    event.preventDefault();
    const result = await loginUser(formData.usuario, formData.contraseña);
    
    if (result) {
        console.log("Club ID:", result.clubid);
        console.log("Club Category:", result.clubcategory);
        
        // Redirigir a la página sin traducción
        window.location.href = `/dashboard/club?view=${result.clubcategory}`;
    } else {
        console.log("Error en la autenticación");
    }
};

