
import axios from "axios"
import { useEffect, useState } from "react"
import "./css/ProfileUser.css"

export default function ProfileUser(){
        const [response, setRes] = useState([]);
        const data = {headers: {id_user: localStorage.getItem("id_user")}}
        useEffect(()=>{
            axios.get("http://localhost:8082/user/profile",data)
            .then((response)=>{setRes(response.data);})
        },[])
        const ProfileInfo =()=>{ 
            return(
                <div className="ProfileInfo">
                    <a>ФИО: {response.user_surname+" "+response.user_name +" "+ response.user_patronic}</a>
                    <a>О себе: {response.user_about}</a>
                </div>
            )

        }


    return(
        <>
            <h1>Ваш профиль</h1>
            <ProfileInfo />
        </>
    )
}