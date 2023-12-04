import "./css/MainPage.css"

export default function Headers(){
    const LogoAvatar =()=>{
        return(
            <div>
                <a>Войти</a>
            </div>
        )
    }
    return(
    <>
        <a>
            PS.com
        </a>
        <div>
            <img />
            <LogoAvatar />   
        </div>
    </>)
}