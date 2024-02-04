import axios  from "axios";
import "./css/Setting.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function SettingsPages(){
    const [name, setName] = useState();
    const [surname, setSur] = useState();
    const [patronic, setPatr] = useState();
    const [password, setPass] = useState();
    const [Login, setLogin] = useState();
    const [About, setAbout] = useState();
    const [messeger, setMess] = useState();
    const [Vis, setVis]= useState(false);
    const [Mess, setM]= useState();
    const nav = useNavigate();
    const data ={headers:{
        user_name: name,
        user_surname: surname,
        user_patronic: patronic,
        user_login: Login,
        user_password: password,
        user_about: About,
        user_messager: messeger
    }}
    const data2 = {headers:{
        id_user: localStorage.getItem("id_user")
    }}
    const datajs = JSON.stringify(data)
    const onBut = async (e)=>{
        e.preventDefault();
        console.log(datajs)
        if(Login  && name && surname && patronic && password && About && messeger){
            await axios.get("http://localhost:8082/user/change?id_user="+ parseInt(localStorage.getItem("id_user")), data)
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
                <button className="btnSet" onClick={(e)=>{onDel(e);}}>Удалить аккаунт</button>
                <h1>Изменение данных</h1>
                <input type="text" placeholder="Введите Фамилию" onChange={(e)=>{setSur(e.target.value)}}/>
                <input type="text" placeholder="Введите Имя" onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="Введите Отчество" onChange={(e)=>{setPatr(e.target.value)}}/>
                <input type="text" placeholder="Введите свой логин" onChange={(e)=>{setLogin(e.target.value)}}/>
                <input type="text" placeholder="Введите пароль" onChange={(e)=>{setPass(e.target.value)}}/>
                <input type="text" placeholder="Расскажите немного о себе " onChange={(e)=>{setAbout(e.target.value)}}/>
                <input type="text" placeholder="Контактные данные" onChange={(e)=>{setMess(e.target.value)}}/>
                <button className="btnSetd" onClick={(e)=>{onBut(e);}}>Изменить данные</button>
                <button className="btnSetd" onClick={(e)=>{onBut(e);}}>Добавить фото</button>
                {Vis && <Reg />}
                </form>

            </div>
        </div>
    )
}