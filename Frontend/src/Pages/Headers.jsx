import "./css/Headers.css"
import isAuth from "../hook/isAuth"

export default function Headers(){
    const LogoAvatar =()=>{
        if(isAuth) return(
            <div>
                <a>Войти</a>
            </div>
        );
        else return(
            <div>
                <a>Войти</a>
            </div>

        );
    }
    return(
    <>
        <a>
            <colorblue>PS.c</colorblue>om
        </a>
        <div>
            <img />
            <LogoAvatar />   
        </div>
    </>)
}