import AllStarts from "../Pages/AllStarts";
import MainPage from "../Pages/MainPage";
import NotFound from "../Pages/NotFound";
import { Route, Routes } from "react-router-dom";
import ProfileUser from "../Pages/ProfileUser";
import ProfileStarts from "../Pages/ProfileStarts";
import AllCmd from "../Pages/AllCmd";
import AddStart from "../Pages/AddStarts";
import SettingsPages from "../Pages/SettingsPages";


export default function RouterAuthYes(){
    return(
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profileuser" element={<ProfileUser />} />
        <Route path="/profilestart" element={<ProfileStarts />} />
        <Route path="/allstarts" element={<AllStarts />} />
        <Route path="/allcmd" element={<AllCmd />} />
        <Route path="/addstarts" element={<AddStart />} />
        <Route path="/settings" element={<SettingsPages />}></Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    )
}