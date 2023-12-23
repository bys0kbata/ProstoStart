import { Axios } from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./css/Auth.css"
import img from "./img/ImgMainTwo.png";


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
        <div className="AuthPage">
            <img src={img} />
            <div className="FormAuth">
                <h1>Авторизация</h1>
                <form>
                    <div  className="inputss">
                        <input type="text" placeholder="Введите логин:" onChange={(e)=>{setLogin(e.target.value)}} />
                    </div>
                    <div  className="inputss">
                        <input type="text" placeholder="Введите пароль:" onChange={(e)=>{setPass(e.target.value)}} />
                    </div>
                    <p>Нет аккаунта?<a href="/register"> Создай его!</a></p>
                    <button className="btnAuth" onClick={(e)=>{clickAuth(e)}}>Войти</button>
                </form>
            </div>
        </div>
    )
}