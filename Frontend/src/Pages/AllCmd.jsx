import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
import "./css/AllCMD.css"


export default function AllCmd(){
    const nav = useNavigate();
    const [arrayStart, setAS] = useState([]);
    const [Vis,setVis] = useState(0);
    useEffect(()=>{
        axios.get("http://localhost:8082/cmd/all")
        .then((response)=>{setAS(response.data);})
       },[]);
       const GoAddcmd =()=>{
        arrayStart.map((One)=>{
        if(One.id_creater.id_user==localStorage.getItem("id_user"))
        setVis(Vis+1);
       })
       if(Vis==0) return(
        <button className="btnAbout" onClick={()=>{nav("/addcmd");}}>+</button>
       )
       }
    return(
        <div className="Allcmd">
            <h1>Все команды</h1>
            <GoAddcmd />
            <table>
                <tr>
                    <th>Название команды</th>
                    <th>Контакт</th>
                    <th>Портфолио</th>
                    <th></th>
                </tr>
                {   
                 arrayStart.map((one)=>{
                    return(
                        <tr>
                            <td>{one.name_Comand}</td>
                            <td>{one.contact_Comand}</td>
                            <td>{one.link_Comand}</td>
                            <button className="btnAbout" onClick={()=>{nav("/profilecmd/"+one.id_Comand)}}>Посмотреть</button>
                        </tr>
                    )
                 })
                }

            </table>
        </div>
    )
}