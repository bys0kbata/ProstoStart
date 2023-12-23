import "./css/Headers.css"
import isAuth from "../hook/isAuth"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Headers(){
    const nav = useNavigate();
    const [nickUser, setNick]= useState('');
    useEffect(()=>{
        setNick(localStorage.getItem("Nick"))
    },[])
    const onBut = ()=>{
        localStorage.clear();
        localStorage.setItem("isAuth", "false");
        nav("/");
        location.reload();

    }
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
                <button onClick={()=>{onBut()}}>Выйти</button>
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