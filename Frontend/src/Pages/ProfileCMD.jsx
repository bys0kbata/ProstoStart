import axios from "axios";
import { useEffect, useState } from "react";
import "./css/ProfileCMD.css"
import { useNavigate } from "react-router-dom"

export default function ProfileCMD(){
    const [ArrInfo,setAI] = useState([]);
    const [PartInfo,setPI] = useState([]);
    const [Name,setName] = useState();
    const [Surname,setSurName] = useState();
    const [Role,setRole] = useState();
    const href = parseInt(location.pathname.match(/\d+/));
    const [Vis, setVis]= useState(false);
    const [Vis2, setVis2]= useState(false);
    const [Mess, setM]= useState();
    const [Mess2, setM2]= useState();
    const [NameComand,setNC] = useState();
    const [AboutCommand,setAC] = useState();
    const [ExpComand,setEC] = useState();
    const [ContactComand,setCC] = useState();
    const [PortComand,setPC] = useState();
    const nav = useNavigate();
    const data = {headers: {
        id_CMD: href
    }}
    const data2 = 
    {
            name_Part: Name,
            surname_Part: Surname,
            role_Part: Role,
            id_CommandCR: {
                id_Comand: ArrInfo.id_Comand,
                name_Comand:  ArrInfo.name_Comand,
                id_creater: {
                    id_user:ArrInfo.id_creater?.id_user ,
                    user_name: ArrInfo.id_creater?.user_name,
                    user_surname: ArrInfo.id_creater?.user_surname,
                    user_patronic: ArrInfo.id_creater?.user_patronic ,
                    user_login: ArrInfo.id_creater?.user_login,
                    user_password: ArrInfo.id_creater?.user_password,
                    user_about: ArrInfo.id_creater?.user_about,
                    user_messeger: ArrInfo.id_creater?.user_messeger
                },
                about_Comand:  ArrInfo.about_Comand,
                link_Comand: ArrInfo.link_Comand,
                exp_Comand: ArrInfo.exp_Comand ,
                contact_Comand: ArrInfo.contact_Comand
            }
    }
    const data3 = {headers:{
        id_command: ArrInfo.id_Comand
    }}
    const data4 ={
        headers :{
            name_Comand: NameComand,
            about_Comand: AboutCommand,
            exp_Comand:ExpComand,
            contact_Comand:ContactComand,
            link_Comand: PortComand
        }
    }
    useEffect(()=>{
        axios.get("http://localhost:8082/cmd/prof",data)
        .then((res)=>{
            console.log(res);
            setAI(res.data);
        })
        axios.get("http://localhost:8082/bundleuc/all",data)
        .then((res)=>{
            console.log(res);
            setPI(res.data);
        })
    },[])

    const  onBut=()=>{
        if(Name && Surname && Role){
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
    const delPart=(id)=>{
        axios.get("http://localhost:8082/bundleuc/delete?id_bundleuc="+id)
        location.reload();
    }
    const InDel = (props)=>{
        if(ArrInfo.id_creater?.id_user == localStorage.getItem("id_user"))
        return(
            <button className="btnSet" onClick={(e)=>{e.preventDefault();delPart(props.id)}}>Удалить</button>
    )
    }
    const TablePers = ()=>{
        return(
            <table>
                <tr>
                    <th>
                        Фамилия
                    </th>
                    <th>
                        Имя
                    </th>
                    <th>
                       Роль
                    </th>

                </tr>
                    {
                        PartInfo.map((Part)=>{
                            if(ArrInfo.id_Comand === Part.id_CommandCR?.id_Comand){
                            return(
                                <tr>
                                    <td>{Part.name_Part}</td>
                                    <td>{Part.surname_Part}</td>
                                    <td>{Part.role_Part}</td>
                                     <td><InDel id={Part.id_Bundle}/></td>
                                </tr>
                            )}
                    })
                    }


            </table>
        )
    }

    const onDel= ()=>{        
        axios.get("http://localhost:8082/cmd/delete",data3)
        .then((response)=>{console.log(response.data);})
        nav("/");}
    const ButDe= ()=>{
        if(ArrInfo.id_creater?.id_user == localStorage.getItem("id_user"))
        return(
            <button id="ButDe" className="btnSet" onClick={()=>{onDel()}}>Удалить команду</button>
    )
    }
    const Reg = ()=>{
        return(
            <div>
                <h3>{Mess}</h3>
            </div>
        )
    }
    const Reg2= ()=>{
        return(
            <div>
                <h3>{Mess2}</h3>
            </div>
        )
    }
    const onCH = ()=>{
        if(NameComand && AboutCommand && ExpComand && ContactComand&&PortComand){
            axios.get("http://localhost:8082/cmd/change?id_Comand="+ArrInfo.id_Comand, data4)
            .then(function (response) {
                if(response.data === "OK") {
                    setM2("Успешно изменили.")
                    setVis2(true);
                    setTimeout(()=>{location.reload();}, 1500);} 
                    else{
                        setM2("Неполадки с сервером, Попробуйте позже!")
                        setVis2(true);
                        setTimeout(()=>{nav("/")}, 1500);
                    }
            })
        } else {
            setM2("Заполните все поля!")
            setVis2(true);
        }
        location.reload();
    }
    return(<div className="ProfileCMD">
        <h1> Профиль Команды</h1>
        <div className="ProfileInfo">
            <a>Название команды:{ArrInfo.name_Comand}<br /></a>
            <a>Создатель:{ArrInfo.id_creater?.user_name}<br /></a>
            <a>О команде: {ArrInfo.about_Comand} <br /> </a>
            <a> Контактные данные: {ArrInfo.contact_Comand} <br /></a>
            <a> Наш опыт: {ArrInfo.exp_Comand} <br /></a>
            <a> Портфолио: {ArrInfo.link_Comand}</a>
        </div>
        <ButDe />
        <form style={(ArrInfo.id_creater?.id_user != localStorage.getItem("id_user"))? {display:"none"}:{} }>
            <h1>Добавить участника</h1>
                <input type="text" placeholder="Фамилия" value={Surname} onChange={(e)=>{setSurName(e.target.value)}}></input>
                <input type="text" placeholder="Имя" value={Name}  onChange={(e)=>{setName(e.target.value)}}></input>
                <input  type="text" placeholder="Роль" value={Role}  onChange={(e)=>{setRole(e.target.value)}} ></input>
                {Vis && <Reg />}
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault(); onBut();}}>Добавить</button>
            <h1>Изменить данные</h1>    
                <input type="text" placeholder="Название команды"  onChange={(e)=>{setNC(e.target.value)}}></input>
                <input type="text" placeholder="О команде"   onChange={(e)=>{setAC(e.target.value)}}></input>
                <input  type="text" placeholder="Контактные данные"   onChange={(e)=>{setCC(e.target.value)}} ></input>
                <input type="text" placeholder="Опыт"  onChange={(e)=>{setEC(e.target.value)}}></input>
                <input type="text" placeholder="Ссылка на Портфолио"   onChange={(e)=>{setPC(e.target.value)}}></input>
                {Vis2 && <Reg2 />}
                <button  id="btnCrAdd" onClick={(e)=>{e.preventDefault(); onCH();}}>Изменить</button>
            </form>
        <h1>Участники команды</h1>
        <TablePers />
    </div>);
}