import { useEffect, useState } from "react";
import axios from 'axios'
import "./css/AllStarts.css"
import { useNavigate } from "react-router-dom"

export default function AllStarts(){
    const nav = useNavigate();
    const [arrayStart, setAS] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8082/start/all")
        .then((response)=>{setAS(response.data);})
       },[]);
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
                        <OneStart id={one.id_Start} name={one.name_Start} creater={one.id_CreatSt?.user_name}/>)
                    })

                }
            </div>
        )
    }
    
    
    
    return(
        <div>
            <h1 className="AllLogo">Все Старты</h1>
            <button className="btnAbout" onClick={()=>{nav("/addstarts");}}>+</button>
            <ArrayStart />
        </div>
    )
}