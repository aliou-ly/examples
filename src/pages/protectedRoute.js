import {Navigate, Outlet } from "react-router-dom";
import React from "react";
import {useAuth} from "./login/AuthProvider";

const ProtectedRoutes = () => {
    const { authenticated} = useAuth()

    return authenticated ? <Outlet/> : <Navigate to={'/login'} replace/>
}

export default ProtectedRoutes;