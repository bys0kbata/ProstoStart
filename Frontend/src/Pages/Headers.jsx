import "./css/Headers.css"
import isAuth from "../hook/isAuth"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Headers(){
    const nav = useNavigate();
    const [nickUser, setNick]= useState('');
    const [classMenu, setMenu] = useState("container");
    const [visMenu, setVisMenu]= useState(false);
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
    const BtnLogo = ()=>{
        return(
            <div id="idBtn">
            <div className="btnLogo">
            <a>{nickUser}</a>
            <button onClick={()=>{onBut()}}>Выйти</button>
        </div></div>
        )
    }
    const LogoAvatar =()=>{
        if(isAuth()== true)return(
            <div className="MLogo">
            <MenuWeb />
            <BtnLogo />   </div>
        ); 
        else return( <></>
        );
    }
    const MenuBottom = ()=>{
        return(
            <div id="myDropdown" className="dropdown-content">
            <div className="ColumnMenu"> <a className="listchild" href="/profileuser"> Мой профили </a>
            <a className="listchild" href="/">Главная страница</a>
            <a className="listchild" href="/allstarts">Все старты</a>
            <a className="listchild" href="/allcmd">Все команды</a>
            <a className="listchild" href="/settings">Настройки профиля</a>
            </div>

        </div>
        )
    }
    const MenuWeb = ()=>{
        function myFunction() {
            if(classMenu === "container" ) 
            {
                setMenu("change");
                setVisMenu(true);
            }
            else
            { 
                setMenu("container");
                setVisMenu(false);
            }
        }
        return(
            <div id="Menu"  className={classMenu} onClick={()=>{myFunction()}}>
                 <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                {visMenu && <MenuBottom /> }
            </div>
        )
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