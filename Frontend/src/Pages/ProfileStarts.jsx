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
    const data2 ={
        id_Start: href,
        
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
    const onBut = ()=>{
        if(NameStart && AboutStart){
            axios.post("http://localhost:8082/bundleuc/create", data2)
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
            <a>Создатель:<br /></a>
            <a>О cтарте: {ArrInfo.about_Start} <br /> </a>
        </div>
            <div className="OnlyCreater">
                <button className="btnSet">Удалить</button>
                <form>
                <h1>Изменить данные</h1>
                <input type="text" placeholder="Название старта" onChange={(e)=>{setNS(e.target.value)}}></input>
                <input type="text" placeholder="О старте" onChange={(e)=>{setAS(e.target.value)}}></input>
                {Vis && <Reg />}
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault();}}>Изменить</button>
                </form>
            </div>
            <div className="OnlyCMD">
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault();}}>Откликнуться</button> 
            </div>
            <TableRes />
        </div>
    )
    else {nav("/")}
}