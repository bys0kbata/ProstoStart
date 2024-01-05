import axios  from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./css/Auth.css"
import img from "./img/ImgMainTwo.png";


export default function Auth(){
    const [login,setLogin] = useState()
    const [pass,setPass] = useState()
    const [vis,setVis] = useState(false);
    const [Messread, setMR] = useState();
    const data ={headers:{
        user_login: login,
        user_password: pass}
    }
    const nav = useNavigate();
    const clickAuth = (e)=>{
        e.preventDefault();
        if(login&&pass){
        axios.get("http://localhost:8082/user/auth",data)
        .then((response)=>{
            console.log( response.data);
            if(response.data[0]){
                localStorage.setItem("Nick", response.data[0].user_name);
                localStorage.setItem("id_user", response.data[0].id_user);
                localStorage.setItem("isAuth", "true");
                setMR("Успешно вошли. Переадресация.")
                setVis(true);
                setTimeout(()=>{nav("/"); location.reload();}, 2500);
            } else {
                setMR("Неправильный логин или пароль")
                setVis(true);
            }
        })
        } else{
            setMR("Заполните все поля.")
            setVis(true);
        }
       
    }
    const Mess = ()=>{
        return(
            <h4>{Messread}</h4>
        )
    }

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
                    {vis && <Mess />}
                    <p>Нет аккаунта?<button className="btnReg" onClick={()=>{nav("/reg");}}> Создай его!</button></p>
                    <button className="btnAuth" onClick={(e)=>{clickAuth(e)}}>Войти</button>
                </form>
            </div>
        </div>
    )
}