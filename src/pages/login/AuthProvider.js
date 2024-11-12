import React, {createContext, useContext, useMemo, useState} from "react";
import {LoginService} from "../../services/login.service";

const authContext = createContext({
    user: { email: '', password: '' },
    login: (email, password) =>  ({ email, password }),
    logout: () => {},
    authenticated: false
})

export const AuthProvider = (props) => {
    const [token, setToken] = useState(() => sessionStorage.getItem('token'))
    const [user, setUser] = useState({ email: '', password: '' })


    const login = async (email, password) => {
       try {
              const user = await LoginService.login(email, password)
               if (user) {
                   const uuid = Math.random().toString(36).substring(7)
                   sessionStorage.setItem('token', JSON.stringify(uuid))
                   setToken(uuid)
                   setUser(user)
                }
       } catch (e) {
           console.error(e)
       }
    }

    const logout = () => {
        sessionStorage.removeItem('token')
        setToken(null)
    }

    const authenticated = useMemo(() => {
        return token !== null
    }, [token])

    return (
        <authContext.Provider value={{ user , login, logout, authenticated}}>
            {props.children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}