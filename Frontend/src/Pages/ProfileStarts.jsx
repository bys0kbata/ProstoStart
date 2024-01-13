import "./css/ProfileStarts.css"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ProfileStarts(){
    const [ArrInfo,setAI] = useState([])
    const href = parseInt(location.pathname.match(/\d+/));
    const [Vis, setVis]= useState(false);
    const [Mess, setM]= useState();
    const [NameStart, setNS]= useState();
    const [AboutStart, setAS]= useState();
    const data = {headers: {
        id_Start: href
    }}
    const data2 ={headers:{
        name_Start: NameStart,
        about_Start: AboutStart}
        
    }
    const data3 = {headers:{
        id_Start: ArrInfo.id_Start
    }}
    const data4 = {
    
            id_Start: {
                id_Start: 12,
                id_CreatSt: {
                    id_user: 302,
                    user_name: "Denis",
                    user_surname: "Pravdin",
                    user_patronic: "Sergeevich",
                    user_login: "1234",
                    user_password: "1234",
                    user_about: "1234",
                    user_messeger: "1234"
                },
                about_Start: "sdfsdf",
                name_Start: "sdfsd"
            },
            id_Command: {
                id_Comand: 203,
                name_Comand: "StarLine",
                id_creater: {
                    id_user: 302,
                    user_name: "Denis",
                    user_surname: "Pravdin",
                    user_patronic: "Sergeevich",
                    user_login: "1234",
                    user_password: "1234",
                    user_about: "1234",
                    user_messeger: "1234"
                },
                link_Comand: "//dsfg/fdgdfg",
                about_Comand: "Супер Пупер команда",
                exp_Comand: "Нету",
                contact_Comand: "89963420562"
            },
            status_Bundle: "В Ожиданий"
    
    }
    const nav = useNavigate();
    console.log(href)
    useEffect(()=>{
        axios.get("http://localhost:8082/start/profile",data)
        .then((res)=>{
            console.log(res);
            setAI(res.data);
        })

    },[])
    const Reg = ()=>{
        return(
            <div>
                <h3>{Mess}</h3>
            </div>
        )
    }
    const onDel = () =>{
        axios.get("http://localhost:8082/start/delete",data3)
        .then((response)=>{console.log(response.data);})
        nav("/");
    }
    const onCH = ()=>{
        if(NameStart && AboutStart){
            axios.get("http://localhost:8082/start/change?id_Start="+ArrInfo.id_Start, data2)
            .then(function (response) {
                if(response.data === "OK") {
                    setM("Успешно добавили.")
                    setVis(true);
                    setTimeout(()=>{location.reload();}, 2500);} 
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
        location.reload();
    }
    const onBut = ()=>{
        if(NameStart && AboutStart){
            axios.post("http://localhost:8082/bundlecs/create", data4)
            .then(function (response) {
                if(response.data === "OK") {
                    setM("Успешно добавили.")
                    setVis(true);
                    setTimeout(()=>{location.reload();}, 2500);} 
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
    const TableRes = ()=>{
        return(
            <table>
                <tr>
                    <th>Название команды</th>
                    <th>Ссылка на портфолио</th>
                    <th>Контакты</th>
                </tr>

            </table>
        )
    }

    if(ArrInfo) return(
        <div className="ProfileStarts">
            <h1>Профиль Старта</h1>
            <div className="ProfileInfo">
            <h1>{ArrInfo.name_Start}</h1>
            <a>Создатель:{ArrInfo.id_CreatSt?.user_name}<br /></a>
            <a>О cтарте: {ArrInfo.about_Start} <br /> </a>
        </div>
            <div className="OnlyCreater" style={(ArrInfo.id_CreatSt?.id_user != localStorage.getItem("id_user"))? {display:"none"}:{} }>
                <button className="btnSet" onClick={(e)=>{e.preventDefault();onDel();}}>Удалить</button>
                <form>
                <h1>Изменить данные</h1>
                <input type="text" placeholder="Название старта" onChange={(e)=>{setNS(e.target.value)}}></input>
                <input type="text" placeholder="О старте" onChange={(e)=>{setAS(e.target.value)}}></input>
                {Vis && <Reg />}
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault();onCH();}}>Изменить</button>
                </form>
            </div>
            <div className="OnlyCMD">
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault();onBut();}}>Откликнуться</button> 
            </div>
            <TableRes />
        </div>
    )
    else {nav("/")}
}