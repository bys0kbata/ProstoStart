
import RouterAuthNo from "./Router/RouterAuthNo";
import RouterAuthYes from "./Router/RouterAuthYes";
import isAuth from "./hook/isAuth";
import { useEffect, useState } from "react";


export default function App() {

  const [auth, setauth] = useState();
  useEffect(()=>{
    let aith = isAuth();
    setauth(aith);
    console.log(aith);
  },[])
  console.log(auth);
  if(auth == true)  return(<RouterAuthYes />)
  else if(auth == false) return (<RouterAuthNo />)
  else return(<RouterAuthNo />)
}