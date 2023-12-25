import { Axios } from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./css/Auth.css"
import img from "./img/ImgMainTwo.png";
import imgopen from "./img/openglazz.png"


export default function Auth(){
    const [login,setLogin] = useState()
    const [pass,setPass] = useState()
    const [visPass,setVisPass] = useState(false);
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
    // const inputPass = ()=>{
    //     return(


    //     )
    // }

    return(
        <div className="AuthPage">
            <img src={img} />
            <div className="FormAuth">
                <h1>Авторизация</h1>
                <form>
                    <div className="inputLogin" >
                        <input type="text" placeholder="Введите логин:" onChange={(e)=>{setLogin(e.target.value)}} />
                    </div>
                    <div  className="inputss">
                        <input type="text" placeholder="Введите пароль:" onChange={(e)=>{setPass(e.target.value)}} />
                    </div>
                    <p>Нет аккаунта?<button className="btnReg" onClick={()=>{nav("/reg");}}> Создай его!</button></p>
                    <button className="btnAuth" onClick={(e)=>{clickAuth(e)}}>Войти</button>
                </form>
            </div>
        </div>
    )
}