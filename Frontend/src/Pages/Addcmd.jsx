import { useState } from "react"
import axios  from "axios";
import { useNavigate } from "react-router-dom"
import "./css/AddCMD.css"

export default function Addcmd(){
    const nav = useNavigate();
    const [NameCMD,  setName] = useState();
    const [aboutCMD, setAbout] = useState();
    const [contactCMD, setContact] = useState();
    const [expCMD, setEXP] = useState();
    const [linkCMD, setLink] = useState();
    const [Vis, setVis]= useState(false);
    const [Mess, setM]= useState();
    const data={
        name_Comand: NameCMD,
        about_Comand: aboutCMD,
        exp_Comand: expCMD,
        contact_Comand: contactCMD,
        link_Comand: linkCMD
    }
    const onBut = async (e)=>{
        e.preventDefault();
        if(NameCMD && aboutCMD && contactCMD && expCMD && linkCMD){
            await axios.post("http://localhost:8082/cmd/create", data)
            .then(function (response) {
                if(response.data === "OK") {
                    setM("Успешно зарегистрировались. Переношу на главную страницу")
                    setVis(true);
                    setTimeout(()=>{nav("/")}, 2500);} 
                    else{
                        setM("Неполадки с сервером, Попробуйте позже!")
                        setVis(true);
                        setTimeout(()=>{nav("/allcmd")}, 2500);
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
            <h1>Добавление своей команды</h1>
            <form>
                <input type="text" placeholder="Введите Название" onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" placeholder="Коротко опишите свою команду" onChange={(e)=>{setAbout(e.target.value)}}/>
                <input type="text" placeholder="Контактные данные"  onChange={(e)=>{setContact(e.target.value)}}/>
                <input type="text" placeholder="Расскажите о опыте команды"  onChange={(e)=>{setEXP(e.target.value)}}/>
                <input type="text" placeholder="Ссылка на портфолио команды"  onChange={(e)=>{setLink(e.target.value)}}/>
                <button id="btnCrAdd" onClick={(e)=>{onBut(e);}}>Создать</button>
                {Vis && <Reg />}
            </form>
        </div>
    )
}