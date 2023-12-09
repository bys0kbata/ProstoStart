import { Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Register from "../Pages/Register";
import Auth from "../Pages/Auth";
import NotFound from "../Pages/NotFound";

export default function RouterAuthNo(){
    return(
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    )
}