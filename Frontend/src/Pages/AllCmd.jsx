import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'

export default function AllCmd(){
    const nav = useNavigate();
    const [arrayStart, setAS] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8082/cmd/all")
        .then((response)=>{setAS(response.data);})
       },[]);
    return(
        <>
            <h1>Все команды</h1>
            <button className="btnAbout" onClick={()=>{nav("/addcmd");}}>+</button>
            <table>
                <tr>
                    <td>ID команды</td>
                    <td>Название команды</td>
                </tr>

            </table>
        </>
    )
}