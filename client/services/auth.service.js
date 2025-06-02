const API_URL = 'http://127.0.0.1:5000/user'; 

// Guardar el token en localStorage
const saveToken = (token) => {
    localStorage.setItem('token', token);
};

// Obtener el token
const getToken = () => {
    return localStorage.getItem('token');
};

// Borrar el token
const logout = () => {
    localStorage.removeItem('token');
};

// Login
export const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Login failed");

        saveToken(data.access_token)
        return data;
    } catch (error) {
        console.error("❌ Error during login:", error.message);
        throw error;
    }
};


// Registro
export const register = async (userData) => {
    const res = await fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!res.ok) throw new Error('Error al registrarse');

    const data = await res.json();
    saveToken(data.token); // Guardar token si se recibe
    return data;
};

// Verificar si el token es válido (autenticado)
export const verifyToken = async () => {
    const token = getToken();
    if (!token) return null;

    const res = await fetch(`${API_URL}/verify`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        logout(); // Si el token es inválido, lo removemos
        return null;
    }

    return res.json(); // Retorna el usuario autenticado
};

// Exportar funciones auxiliares
export { getToken, logout };
