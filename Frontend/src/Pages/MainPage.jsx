import { useNavigate } from "react-router-dom"
import isAuth from "../hook/isAuth";
import img from "./img/ImgMain.png";
import "./css/MainPage.css";
import Auth from "./Auth";
import { useState } from "react";

export default function MainPage(){
    const nav = useNavigate();
    const auth = isAuth();
    const [isVis, setVis] = useState(false);
    console.log(auth);
    const btnCklick=()=>{
    if(auth) return(nav("/allstarts"))
    else setVis(true)

}
    return (
        <div>
        <div className="Main">
           <div className="LogoMain"> 
                <h1>Prosto Start</h1>
                <p>Легко и просто ищите людей для своего старта</p>
                <button onClick={()=>{btnCklick()}}>Искать</button>
            </div>
            <img src={img} />
        </div>
        {isVis && <Auth />}
        </div>
    )
}