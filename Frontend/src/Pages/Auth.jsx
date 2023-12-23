import { Axios } from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Auth(){
    const [login,setLogin] = useState()
    const [pass,setPass] = useState()
    const nav = useNavigate();
    const clickAuth = (e)=>{
        e.preventDefault();
        //Axios.get("http://localhost:8080/hello")
        // .then((response)=>{
        //     console.log(response.data);
        //  })
        localStorage.setItem("Nick", login);
        localStorage.setItem("isAuth", "true");
        nav("/");
        location.reload();
    }

    return(
        <div>
            <h1>Авторизация</h1>
            <form>
                <input type="text" placeholder="Введите логин:" onChange={(e)=>{setLogin(e.target.value)}} />
                <input type="text" placeholder="Введите пароль:" onChange={(e)=>{setPass(e.target.value)}} />
                <p>Нет аккаунта?<a href="/register">Создай его!</a></p>
                <button onClick={(e)=>{clickAuth(e)}}>Войти</button>
            </form>
        </div>
    )
}