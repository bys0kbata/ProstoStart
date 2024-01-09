
import axios from "axios"
import { useEffect, useState } from "react"
import "./css/ProfileUser.css"
import { useNavigate } from "react-router-dom"

export default function ProfileUser(){
        const [response, setRes] = useState([]);
        const nav = useNavigate();
        const data = {headers: {id_user: localStorage.getItem("id_user")}}
        const [arrayStart, setAS] = useState([]);
        useEffect( ()=>{
             axios.get("http://localhost:8082/user/profile",data)
            .then((response)=>{setRes(response.data);});
             axios.get("http://localhost:8082/start/all")
            .then((response)=>{setAS(response.data);});
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
        const OneStart=(props)=>{
            return(
                <button className="btnAbout" onClick={()=>{nav("/profilestart/"+props.id);}}> <div className="OneStart">
                    <h3> Название: {props.name}</h3>
                    <h4> Руководитель: {props.creater}</h4>
                </div></button>
            )
        }
        const ArrayStart = ()=>{
            return(
                <div className="ArrayStart">
                    {
                        arrayStart.map(function(one){
                            console.log(one)
                            return(
                            <OneStart id={one.id_Start} name={one.name_Start} creater={one.creater_Start}/>)
                        })
    
                    }
                </div>
            )
        }


    return(
        <>
            <h1>Ваш профиль</h1>
            <ProfileInfo />
            <h1>Ваши Старты</h1>
            <ArrayStart />
        </>
    )
}