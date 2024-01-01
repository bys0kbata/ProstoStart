import {useState} from "react"
import "./css/AddStarts.css"

export default function AddStart(){
 const [nameStart,setNS] = useState("");
 const [catStart,setCS] = useState("");
 const [AboutStart,setAS] = useState("");
 const data = {
    nameStart: nameStart,
    catStart: catStart,
    AboutStart: AboutStart,
 }

    const onPost = (e)=>{
        e.prefaulDefault();
        console.log(data);
    }
    return(
        <div>
            <h1>Добавление Старта</h1>
            <form>

            <div className="inputLogin" >
                <input type="text" placeholder="Введите название стартапа" onChange={(e)=>{setNS(e.target.value)}}></input>
            </div>
            <div className="inputLogin" >
                <input type="text" placeholder="Введите тематику стартапа" onChange={(e)=>{setCS(e.target.value)}}></input>
            </div>
            <div className="inputLogin" >    
                <input type="text" placeholder="Расскажите о сути стартапа"onChange={(e)=>{setAS(e.target.value)}}></input>
            </div>    
                <button id="btnCrAdd" onClick={()=>{onPost()}}>Создать</button>
            </form>
        </div>
    )
}