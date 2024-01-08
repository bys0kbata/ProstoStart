import axios  from "axios";
import "./css/Setting.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function SettingsPages(){
    const [password, setPass] = useState();
    const [Login, setLogin] = useState();
    const [About, setAbout] = useState();
    const [messeger, setMess] = useState();
    const [Vis, setVis]= useState(false);
    const [Mess, setM]= useState();
    const nav = useNavigate();
    const data ={
        user_login: Login,
        user_password: password,
        user_about: About,
        user_messeger: messeger
    }
    const data2 = {headers:{
        id_user: localStorage.getItem("id_user")
    }}
    const onBut = async (e)=>{
        e.preventDefault();
        if(Login && password && About && messeger){
            await axios.post("http://localhost:8082/user/reg", data)
            .then(function (response) {
                if(response.data === "OK") {
                    setM("Успешно зарегистрировались. Переношу на главную страницу")
                    setVis(true);
                    setTimeout(()=>{nav("/")}, 2500);} 
                    else{
                        setM("Неполадки с сервером, Попробуйте позже!")
                        setVis(true);
                        setTimeout(()=>{nav("/")}, 2500);
                    }
            })
        } else {
            setM("Заполните все поля!")
            setVis(true);
        }
    }
    const onDel= ()=>{        
        axios.get("http://localhost:8082/user/delete",data2)
        .then((response)=>{console.log(response.data);})
        localStorage.clear();
        localStorage.setItem("isAuth", "false");
        nav("/");
        location.reload();}
    const Reg = ()=>{
        return(
            <div>
                <h3>{Mess}</h3>
            </div>
        )
    }

    return(
        <div className="Setting">
            <h1>Настройки Аккаунта</h1>
            <div>
                <form>
                <button onClick={(e)=>{onDel(e);}}>Удалить аккаунт</button>
                <h1>Изменение данных</h1>
                <input type="text" placeholder="Введите свой логин" onChange={(e)=>{setLogin(e.target.value)}}/>
                <input type="text" placeholder="Введите пароль" onChange={(e)=>{setPass(e.target.value)}}/>
                <input type="text" placeholder="Расскажите немного о себе " onChange={(e)=>{setAbout(e.target.value)}}/>
                <input type="text" placeholder="Контактные данные" onChange={(e)=>{setMess(e.target.value)}}/>
                <button onClick={(e)=>{onBut(e);}}>Изменить данные</button>
                {Vis && <Reg />}
                </form>

            </div>
        </div>
    )
}