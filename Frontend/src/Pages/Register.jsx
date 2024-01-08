import axios  from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./css/Auth.css"

export default function Register(){
    const nav = useNavigate();
    const [password, setPass] = useState();
    const [Login, setLogin] = useState();
    const [name, setName] = useState();
    const [surname, setSur] = useState();
    const [patronic, setPatr] = useState();
    const [About, setAbout] = useState();
    const [messeger, setMess] = useState();
    const [Vis, setVis]= useState(false);
    const [Mess, setM]= useState();
    const data ={
        user_name: name,
        user_surname: surname,
        user_patronic: patronic,
        user_login: Login,
        user_password: password,
        user_about: About,
        user_messeger: messeger
    }

    const onBut = async (e)=>{
        e.preventDefault();
        if(Login && name && surname && patronic && About && messeger && password){
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
    const Reg = ()=>{
        return(
            <div>
                <h3>{Mess}</h3>
            </div>
        )
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Введите Фамилию" onChange={(e)=>{setSur(e.target.value)}}/>
                <input type="text" placeholder="Введите Имя" onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="Введите Отчество" onChange={(e)=>{setPatr(e.target.value)}}/>
                <input type="text" placeholder="Введите свой логин" onChange={(e)=>{setLogin(e.target.value)}}/>
                <input type="text" placeholder="Введите пароль" onChange={(e)=>{setPass(e.target.value)}}/>
                <input type="text" placeholder="Расскажите немного о себе " onChange={(e)=>{setAbout(e.target.value)}}/>
                <input type="text" placeholder="Контактные данные" onChange={(e)=>{setMess(e.target.value)}}/>
                <button onClick={(e)=>{onBut(e);}}>Зарегистрироваться</button>
            </form>
            {Vis && <Reg />}
        </div>
    )
}