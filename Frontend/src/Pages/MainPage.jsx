import { useNavigate } from "react-router-dom"
import isAuth from "../hook/isAuth";

export default function MainPage(){
    const nav = useNavigate();
    const btnCklick=()=>{
    if(isAuth()) return(nav("/allstarts"))
    else return(nav("/auth"))

}
    return (
        <div>
            <h1>Prosto Start</h1>
            <p>Легко и просто ищите людей для своего старта</p>
            <button onClick={btnCklick}>Искать</button>
        </div>
    )
}