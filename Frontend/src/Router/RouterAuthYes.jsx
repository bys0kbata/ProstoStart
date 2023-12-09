import NotFound from "../Pages/NotFound";

export default function RouterAuthYes(){
    return(
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profileuser" element={<p>Привт</p>} />
        <Route path="/profilestart" element={<p>Привт</p>} />
        <Route path="/allstarts" element={<p>Привт</p>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    )
}