import { useEffect,useState} from "react"
import "./css/AddStarts.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function AddStart(){
 const [nameStart,setNS] = useState("");
 const [AboutStart,setAS] = useState("");
 const [response, setRes] = useState([]);
 const data2 = {headers: {id_user: localStorage.getItem("id_user")}}
 const nav = useNavigate();
 const data = {
    name_Start: nameStart,
    about_Start: AboutStart,
    id_CreatSt: {
        id_user: response.id_user,
        user_name: response.user_name,
        user_surname: response.user_surname,
        user_patronic: response.user_patronic,
        user_login: response.user_login,
        user_password: response.user_password,
        user_about: response.user_about,
        user_messeger: response.user_messeger
    },
    
 }
 useEffect( ()=>{
    axios.get("http://localhost:8082/user/profile",data2)
   .then((response)=>{setRes(response.data);});},[])

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