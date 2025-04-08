'use client'
import './styles.css'
import Link from "next/link";
import { useState } from "react";

export default function Login() {

    const [emailState, setEmail] = useState<string>("")
    const [passwordState, setPassword] = useState<string>("")




    function handleSubmit() {
        console.log(emailState)
        console.log(passwordState)
    }

    return (
        <section className="login-container">
            <div className='login-area'>
                <h1>Login</h1>
                <input type="email" placeholder='Insira seu email ' value={emailState} onChange={((event) => setEmail(event.target.value))}/>
                <input type="password" name="password" id="password" placeholder='Insira sua senha' value={passwordState} onChange={((event) => setPassword(event.target.value))} />
                <button className='submit-login' onClick={handleSubmit} disabled = {!emailState || !passwordState}>Entrar</button>
            </div>
            <Link href="/">
                <button className='go-home'>Voltar ao inicio</button>
            </Link>
        </section>
    )
}