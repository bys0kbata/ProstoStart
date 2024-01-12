import {useState} from "react"
import "./css/AddStarts.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function AddStart(){
 const [nameStart,setNS] = useState("");
 const [AboutStart,setAS] = useState("");
 const nav = useNavigate();
 const data = {
    name_Start: nameStart,
    about_Start: AboutStart,
    
 }

    const onPost = (e)=>{
        e.preventDefault();
        console.log(data);
        axios.post("http://localhost:8082/start/create", data)
        .then((res)=>{console.log(res.data)});
        nav("/allstarts");
    }
    return(
        <div>
            <h1>Добавление Старта</h1>
            <form>

            <div className="inputLogin" >
                <input type="text" placeholder="Введите название стартапа" onChange={(e)=>{setNS(e.target.value)}}></input>
            </div>
            <div className="inputLogin" >    
                <input type="text" placeholder="Расскажите о сути стартапа"onChange={(e)=>{setAS(e.target.value)}}></input>
            </div>    
                <button id="btnCrAdd" onClick={(e)=>{onPost(e)}}>Создать</button>
            </form>
        </div>
    )
}