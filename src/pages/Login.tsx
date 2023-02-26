import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

export const Login = () => {

    const navigate = useNavigate()
    const [error, setError] = useState(false)
    const handleSubmit = async (e: any) => {

        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (err) {
            setError(true)
        }
    }

    return(
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Cat Chat</span>
                <span className="title">Логин</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button>Войти</button>
                </form>
                {error && <span className="error">Что-то пошло не так</span>}
                <p>У вас ещё нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link></p>
            </div>
        </div>
    )
}