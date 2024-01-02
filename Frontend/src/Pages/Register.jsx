import axios  from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Register(){
    const nav = useNavigate();
    const [password, setPass] = useState();
    const [Login, setLogin] = useState();

    const onBut = (e)=>{
        e.preventDefault();
        axios.get("http://localhost:8082/reg")
        .then(function (response) {
            console.log(response);
          })
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Введите свой логин"/>
                <input type="text" placeholder="Введите свой логин"/>
                <input type="text" placeholder="Введите свой логин"/>
                <input type="text" placeholder="Введите свой логин"/>
                <input type="text" placeholder="Введите свой логин"/>
                <input type="text" placeholder="Введите пароль"/>
                <input type="text" placeholder="Повторите пароль"/>

                <button onClick={(e)=>{onBut(e);}}>Зарегистрироваться</button>
            </form>
        </div>
    )
}