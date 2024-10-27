import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);  // User starts as null
    const [loading, setLoading] = useState(true); // Añadir estado de carga

    useEffect(() => {
        // Cargar el usuario desde localStorage si existe
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));  // Parse JSON to restore the user object
        }
        setLoading(false); // Finalizar la carga
    }, []);

    const saveUser = (user) => {
        setUser(user);  // Update state with user object
        localStorage.setItem('user', JSON.stringify(user)); // Guardar el usuario en localStorage
    };

    const clearUser = () => {
        setUser(null);  // Clear user state
        localStorage.removeItem('user'); // Eliminar el usuario de localStorage
    };

    return (
        <UserContext.Provider value={{ user, setUser: saveUser, clearUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
