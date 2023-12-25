import { useNavigate } from "react-router-dom"
import "./css/NotFound.css"

export default function NotFound(){
    const nav = useNavigate();
    return(
        <div className="NotFound">
            <h1 className="img404">Error 404</h1>
            <h1>Страница не найдена!<br /> Вернитесь на главную страницу.</h1>
            <button className="btnNot" onClick={()=>{nav("/");}}>Главная страница</button>
        </div>
    )
}