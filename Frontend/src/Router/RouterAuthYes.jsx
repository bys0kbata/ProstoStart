import AllStarts from "../Pages/AllStarts";
import MainPage from "../Pages/MainPage";
import NotFound from "../Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function RouterAuthYes(){
    return(
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profileuser" element={<p>Привт</p>} />
        <Route path="/profilestart" element={<p>Привт</p>} />
        <Route path="/allstarts" element={<AllStarts />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    )
}