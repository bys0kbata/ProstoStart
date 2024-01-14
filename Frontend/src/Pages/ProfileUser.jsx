
import axios from "axios"
import { useEffect, useState } from "react"
import "./css/ProfileUser.css"
import { useNavigate } from "react-router-dom"

export default function ProfileUser(){
        const [response, setRes] = useState([]);
        const [Cresponse, setCS] = useState([]);
        const nav = useNavigate();
        const data = {headers: {id_user: localStorage.getItem("id_user")}}
        const [arrayStart, setAS] = useState([]);
        useEffect( ()=>{
             axios.get("http://localhost:8082/user/profile",data)
            .then((response)=>{setRes(response.data);});
             axios.get("http://localhost:8082/start/getuserstart", data)
            .then((response)=>{
                console.log(response);setAS(response.data);});
            axios.get("http://localhost:8082/cmd/all")
            .then((response)=>{setCS(response.data);})
        },[])
        const ProfileInfo =()=>{ 
            return(
                <div className="ProfileInfo">
                    <a>NickName:{response.user_login}<br /></a>
                    <a>ФИО: {response.user_surname+" "+response.user_name +" "+ response.user_patronic}<br /></a>
                    <a>О себе: {response.user_about}<br /> </a>
                    <a> Контактные данные: {response.user_messeger}</a>
                </div>
            )

        }
        console.log(Cresponse)
        const OneStart=(props)=>{

            return(
                <button className="btnAbout" onClick={()=>{nav("/profilestart/"+props.id);}}> <div className="OneStart">
                    <h3> Название: {props.name}</h3>
                    <h4> Руководитель: {props.creater}</h4>
                </div></button>
            )
        }
        const CMD =()=>{
            return(<div className="ArrayStart">{
            Cresponse.map((e) =>{
            if(e.id_creater?.id_user ==localStorage.getItem("id_user") )
            return(
                <div>
                    <button className="btnAbout" onClick={()=>{nav("/profilecmd/"+e.id_Comand);}}> <div className="OneStart">
                <h3> Название: {e.name_Comand}</h3>
                <h4> Руководитель: {e.id_creater?.user_name}</h4>
            </div></button>
                </div>
            )})}
            </div>)
        }
        const ArrayStart = ()=>{
            return(
                <div className="ArrayStart">
                    {
                        arrayStart.map(function(one){
                            return(
                            <OneStart id={one.id_Start} name={one.name_Start} creater={one.id_CreatSt?.user_name}/>)
                        })
    
                    }
                </div>
            )
        }


    return(
        <>
            <h1>Ваш профиль</h1>
            <ProfileInfo />
            <h1>Ваша Команда</h1>
            <CMD />
            <h1>Ваши Старты</h1>
            <ArrayStart />
        </>
    )
}