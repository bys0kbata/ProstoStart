import { useEffect, useState } from "react";
import { Navigate, Route, Router } from "react-router-dom";

export default function isAuth(){
    const [auth,setauth] = useState();
      useEffect(()=>{
        setauth(localStorage.getItem("isAuth"));
      },[])
      if(auth === "true") return true
      else if(auth === "false") return false
      else localStorage.setItem("isAuth", false);
}