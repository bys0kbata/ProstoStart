export default function isAuth(){
   let auth = localStorage.getItem("isAuth");
      
      if(auth === "true") return true
      else if(auth === "false") return false
      else localStorage.setItem("isAuth", false);
}