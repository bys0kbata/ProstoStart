import "./css/AllStarts.css"

export default function AllStarts(){
    
    
    const OneStart=(props)=>{
        return(
            <div className="OneStart">
                <h1>{props.name}</h1>
                <button>Подробнее</button>
            </div>
        )
    }
    const ArrayStart = ()=>{
        return(
            <div className="ArrayStart">
                <OneStart name="Cтарт" />
            </div>
        )
    }
    
    
    
    return(
        <div>
            <h1 className="AllLogo">Все Старты</h1>
            <ArrayStart />
        
        </div>
    )
}