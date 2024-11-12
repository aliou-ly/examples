import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/login";
import ProtectedRoutes from "./pages/protectedRoute";
import {AuthProvider} from "./pages/login/AuthProvider";
import Photo from "./components/photo";
import User from "./components/user";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<ProtectedRoutes/>}>
                        <Route element={<App/>} path={'/'}>
                            <Route element={<div className={'other-link'}>Lien 1</div>} path={'log1'}/>
                            <Route element={<div className={'other-link'}>Lien 2</div>} path={'log2'}/>
                            <Route element={<Photo/>} path={'photo'}/>
                            <Route element={<User/>} path={'user'}/>
                        </Route>
                    </Route>
                    <Route element={<Login/>} path={'/login'}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
