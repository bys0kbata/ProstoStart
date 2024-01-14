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
    const [InfoComm, setIC]= useState([]);
    const [ArrBundle, setAB] = useState([]);
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
                id_Start: ArrInfo.id_Start,
                id_CreatSt: {
                    id_user: ArrInfo.id_CreatSt?.id_user,
                    user_name: ArrInfo.id_CreatSt?.user_name,
                    user_surname: ArrInfo.id_CreatSt?.user_surname,
                    user_patronic: ArrInfo.id_CreatSt?.user_patronic,
                    user_login: ArrInfo.id_CreatSt?.user_login,
                    user_password:ArrInfo.id_CreatSt?.user_password,
                    user_about: ArrInfo.id_CreatSt?.user_about,
                    user_messeger: ArrInfo.id_CreatSt?.user_messeger
                },
                about_Start: ArrInfo.about_Start,
                name_Start: ArrInfo.name_Start
            },
            id_Command: {
                id_Comand: InfoComm[0]?.id_Comand,
                name_Comand: InfoComm[0]?.name_Comand,
                id_creater: {
                    id_user: InfoComm[0]?.id_creater?.id_user,
                    user_name: InfoComm[0]?.id_creater?.user_name,
                    user_surname: InfoComm[0]?.id_creater?.user_surname,
                    user_patronic:InfoComm[0]?.id_creater?.user_patronic,
                    user_login: InfoComm[0]?.id_creater?.user_login,
                    user_password: InfoComm[0]?.id_creater?.user_password,
                    user_about: InfoComm[0]?.id_creater?.user_about,
                    user_messeger: InfoComm[0]?.id_creater?.user_messeger
                },
                link_Comand: InfoComm[0]?.link_Comand,
                about_Comand: InfoComm[0]?.about_Comand,
                exp_Comand: InfoComm[0]?.exp_Comand,
                contact_Comand: InfoComm[0]?.contact_Comand
            },
            status_Bundle: "В Ожиданий"
    
    }
    const data5 ={ 
        headers:{
            id_CMD:  localStorage.getItem("id_user")
        }
    }
    const nav = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8082/start/profile",data)
        .then((res)=>{
            setAI(res.data);
        })
        axios.get("http://localhost:8082/cmd/commuser",data5)
        .then((res)=>{
            setIC(res.data);
        })
        axios.get("http://localhost:8082/bundlecs/listbundle",data)
        .then((res)=>{
            console.log(res.data)
            setAB(res.data);
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
    const onCHbundle = (id,status)=>{
        console.log(id)
        console.log(status)
        axios.get("http://localhost:8082/bundlecs/change?id_bundlecs="+id, {headers:{ status_bundle:status}})
        .then(function (response) {
            if(response.data === "OK") {
                location.reload();
            }
        })
        location.reload();
    }
    const onBut = ()=>{
            axios.post("http://localhost:8082/bundlecs/create", data4)
            .then(function (response) {
                if(response.data === "OK") {
                    location.reload();
                }
            })
    }
    const chekbundle=()=>{
        var lol=0
        ArrBundle.map((One)=>{
            if(localStorage.getItem("id_user") == One.id_Command.id_creater?.id_user) 
            {lol=lol+1}
        })
        if (lol==0) return true
        else false
    }
    const onDelBundle=(id)=>{
        axios.get("http://localhost:8082/bundlecs/delete", {headers:{ id_bundle:id}})
        .then(function (response) {
            if(response.data === "OK") {
                location.reload();
            }
        })
    }
    const TableRes = ()=>{
        return(
            <table>
                <tr>
                    <th>Название команды</th>
                    <th>Ссылка на портфолио</th>
                    <th>Контакты</th>
                    <th>Cтатус</th>
                </tr>
                {
                    ArrBundle.map((One)=>{
                        return(
                        <tr>
                            <td>{One.id_Command?.name_Comand}</td>
                            <td>{One.id_Command?.link_Comand}</td>
                            <td>{One.id_Command?.contact_Comand}</td>
                            <td>{One.status_Bundle == "approved"? "Одобрено": One.status_Bundle}</td>
                            <td style={(ArrInfo.id_CreatSt?.id_user != localStorage.getItem("id_user"))? {display:"none"}:{} }> 
                            <button id="btnCrAdd" onClick={()=>{nav("/profilecmd/"+One.id_Command?.id_Comand); location.reload();}}>Check</button> 
                            <button id="btnCrAdd" onClick={()=>{onCHbundle(One.id_Bundle, "approved")}}>+</button> 
                            <button className="btnSe" onClick={()=>{onDelBundle(One.id_Bundle)}}>-</button></td>
                            <td style={(One.id_Command.id_creater.id_user != localStorage.getItem("id_user"))? {display:"none"}:{} }><button className="btnSe" onClick={()=>{onDelBundle(One.id_Bundle)}}>-</button></td>
                        </tr>)
                    })
                }
            </table>
        )
    }

    if(ArrInfo) return(
        <div className="ProfileStarts">
            <h1>Профиль Старта</h1>
            <div className="ProfileInfo">
            <h1>{ArrInfo.name_Start}</h1>
            <a>Создатель :{ArrInfo.id_CreatSt?.user_name}<br /></a>
            <a>Контакт :{ArrInfo.id_CreatSt?.user_messeger}<br /></a>
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
            <div className="OnlyCMD" style={(ArrInfo.id_CreatSt?.id_user != localStorage.getItem("id_user")) &&InfoComm[0] && chekbundle()?{}:{display:"none"} }>
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault();onBut();}}>Откликнуться</button> 
            </div>
            <TableRes />
        </div>
    )
    else {nav("/")}
}