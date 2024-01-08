import "./css/ProfileStarts.css"
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ProfileStarts(){
    const [ArrInfo,setAI] = useState([])
    const href = parseInt(location.pathname.match(/\d+/));
    const data = {headers: {
        id_Start: href
    }}
    const nav = useNavigate();
    console.log(href)
    useEffect(()=>{
        axios.get("http://localhost:8082/start/profile",data)
        .then((res)=>{
            console.log(res);
            setAI(res.data);
        })
    },[])
    if(ArrInfo) return(
        <div className="ProfileStarts">
            <h1>Профиль Старта</h1>
            <h1>{ArrInfo.name_Start}</h1>
            </div>
    )
    else {nav("/")}
}