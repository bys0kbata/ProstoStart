
import RouterAuthNo from "./Router/RouterAuthNo";
import RouterAuthYes from "./Router/RouterAuthYes";
import isAuth from "./hook/isAuth";


export default function App() {
  if(isAuth() == true) return(<RouterAuthYes />)
  else if(isAuth() == false) return (<RouterAuthNo />)
}