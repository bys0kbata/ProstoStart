import { Navigate, Route, Router } from "react-router-dom";

export default function isAuth(){
    const [isAuth,setAuth] = useState();
    setAuth(localStorage.getItem("isAuth"));
    if(isAuth === "true") return(
        <Route>

        </Route>
    ); else return(
        <Route>
            
        </Route>
    )
}