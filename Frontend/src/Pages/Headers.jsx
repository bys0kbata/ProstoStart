import "./css/Headers.css"
import isAuth from "../hook/isAuth"
import { useEffect, useState } from "react";

export default function Headers(){
    const [nickUser, setNick]= useState('');
    useEffect(()=>{
        setNick(localStorage.getItem("Nick"))
    },[])
    const LogoHead = ()=>{
        return(
            <p className="LogoHead">
            <a className="logo">PS.c</a>om
        </p>
        )
    }
    const LogoAvatar =()=>{
        if(isAuth()== true)return(
            <div className="btnLogo">
                <a>{nickUser}</a>
                <button>Выйти</button>
            </div>

        ); 
        else return(
            <div className="btnLogo">
                <a href="/auth">Войти</a>
            </div>
        );
    }
    return(
    <div className="Headers">
        <LogoHead />
        <div>
            <img />
            <LogoAvatar />   
        </div>
    </div>)
}