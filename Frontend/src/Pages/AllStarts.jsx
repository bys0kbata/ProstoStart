import { useEffect, useState } from "react";
import "./css/AllStarts.css"
import { useNavigate } from "react-router-dom"

export default function AllStarts(){
    const nav = useNavigate();
    const [arrayStart, setAS] = useState();
    const data =[{
        id: 0,
        name: "Старт",
        creator: "Максим",
    },{
        id: 1,
        name: "Старт",
        creator: "Макс",
    }]
    useEffect(()=>{
        
        setAS(data);},[]);
    const OneStart=(props)=>{
        return(
            <button className="btnAbout" onClick={()=>{nav("/profilestart");}}> <div className="OneStart">
                <h3> Название: {props.name}</h3>
                <h4> Руководитель: {props.creater}</h4>
            </div></button>
        )
    }
    const ArrayStart = ()=>{
        return(
            <div className="ArrayStart">
                {
                    data.map(function(one){
                        return(
                        <OneStart  name={one.name} creater={one.creator} />)
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