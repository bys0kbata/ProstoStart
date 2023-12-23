import { useNavigate } from "react-router-dom"
import isAuth from "../hook/isAuth";
import img from "./img/ImgMain.png";
import "./css/MainPage.css";

export default function MainPage(){
    const nav = useNavigate();
    const btnCklick = ()=>{
        if(isAuth() == true) {nav("/allstarts")}
        else {nav("/auth")}
    }
    return (
        <div className="Main">
           <div className="LogoMain"> 
                <h1>Prosto Start</h1>
                <p>Легко и просто ищите людей для своего старта</p>
                <button onClick={()=>{btnCklick()}}>Искать</button>
            </div>
            <img src={img} />
        </div>
    )
}