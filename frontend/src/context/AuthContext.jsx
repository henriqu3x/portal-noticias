import { createContext, useContext, useEffect, useState } from "react"
import api from "../services/api"

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')

        if (storedToken && storedUser) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser))

            api.defaults.headers.common.Authorization = `Bearer ${storedToken}`
        }

        setLoading(false)
    }, [])

    const register = async (usuario, email, senha, repita_senha) => {
        try {
            const response = await api.post('/register', {
                usuario,
                email,
                senha,
                repita_senha
            })

            return response.data
        } catch (error) {
            const message = error.response?.data?.message || error.response?.data?.error || "Falha ao cadastrar usuario"

            throw new Error(message);
            
        }
    }

    const login = async (email, senha) => {
        try {
            const response = await api.post('/login', {
                email,
                senha
            })

            const {token, user} = response.data

            localStorage.setItem("token", token)
            localStorage.setItem('user', JSON.stringify(user))

            api.defaults.headers.common.Authorization = `Bearer ${token}`

            setToken(token)
            setUser(user)

            return user
        } catch (error) {
            const message = error.response?.data?.message || error.response?.data?.error || "Error ao fazer login"
            
            throw new Error(message);
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        delete api.defaults.headers.common.Authorization

        setToken(null)
        setUser(null)
    }

    const isAuthenticated = token ? true : false
    const isAdmin = user?.tipo == 'admin'

    return(
        <AuthContext.Provider value={{
            user,
            token,
            loading,
            register,
            login,
            logout,
            isAuthenticated,
            isAdmin
        }}>  
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
