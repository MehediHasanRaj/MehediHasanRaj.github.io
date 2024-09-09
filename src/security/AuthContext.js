import {createContext, useContext, useState} from "react";
import axios from "axios";

// 1. create a context
export const AuthContext = createContext()
// 2. put some state in the context
// 3. share the created context with other component
export const useAuth = () => useContext(AuthContext)  // by "useAuth" any one can use the

export default function AuthProvider({children}) {
    // putting some states in context

    const [isAuthenticated, setAuthenticated] = useState(false)
    const apiClient = axios.create({
        baseURL: 'http://localhost:8080'
    })

    const baseUrl = "http://localhost:8080"

    function login(username, password) {
        if (username === 'mehedi.raj@northsouth.edu' && password === 'mr21396') {

            setAuthenticated(true);
            // setUsername(username)
            return true
        } else {
            setAuthenticated(false);
            // setUsername("Raj")
            return false
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, apiClient,baseUrl}}>
            {children}
        </AuthContext.Provider>
    )
}

