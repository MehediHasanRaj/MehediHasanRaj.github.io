import {createContext, useContext, useState} from "react";
import axios from "axios";

// 1. create a context
export const AuthContext = createContext()
// 2. put some state in the context
// 3. share the created context with other component
export const useAuth = () => useContext(AuthContext)  // by "useAuth" any one can use the

export default function AuthProvider({children}) {
    // putting some states in context
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setAuthenticated] = useState(false)
    const apiClient = axios.create({
        // baseURL: 'http://localhost:8080'
        baseURL : 'https://portfolio-backend-production-2c30.up.railway.app'
    })

    // const baseUrl = "http://localhost:8080"
    const baseUrl = "https://portfolio-backend-production-2c30.up.railway.app"


    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,setAuthenticated, apiClient,baseUrl, username, setUsername, password, setPassword}}>
            {children}
        </AuthContext.Provider>
    )
}

