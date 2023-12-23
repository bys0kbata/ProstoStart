import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage.jsx";
import Register from "../Pages/Register.jsx";
import Auth from "../Pages/Auth.jsx";
import NotFound from "../Pages/NotFound.jsx";

export default function RouterAuthNo(){
    return(
    <Routes>

        <Route path="/registrator" element={<Register />} />
    </Routes>
    )
}