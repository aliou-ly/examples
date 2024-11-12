import React from 'react'
import {useAuth} from "./AuthProvider";
import {Navigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { login, authenticated } = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <>
            {   authenticated ? <Navigate state={{authenticated: authenticated}} to={'/'}/> : (
                <div>
                    <h1>{"Se connecter"}</h1>
                    <form>
                        <input type="email" placeholder={"Email"} value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder={"Mot de passe"} value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <button onClick={handleSubmit} type={"submit"}>{"Se connecter"}</button>
                    </form>
                </div>
            )
            }
        </>
    )
}

export default Login