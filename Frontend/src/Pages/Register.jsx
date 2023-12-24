import { useNavigate } from "react-router-dom"

export default function Register(){
    const nav = useNavigate();
    const onBut = ()=>{
        nav("/");
    }
    return(
        <div>
            <form>
                <input type="text" placeholder="Введите свой логин"/>
                <button onClick={()=>{onBut();}}>Зарегистрироваться</button>
            </form>
        </div>
    )
}