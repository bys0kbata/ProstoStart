import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function ProfileCMD(){
    const [ArrInfo,setAI] = useState([])
    const href = parseInt(location.pathname.match(/\d+/));
    const data = {headers: {
        id_Start: href
    }}
    const nav = useNavigate();
    console.log(href)
    useEffect(()=>{
        axios.get("http://localhost:8082/cmd/profile",data)
        .then((res)=>{
            console.log(res);
            setAI(res.data);
        })
    },[])
    return(<div>
        Профиль Команды
    </div>);
}