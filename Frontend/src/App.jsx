import {Routes, Route} from "react-router-dom"
import MainPage from"./Pages/MainPage"
import Register from "./Pages/Register"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profileuser" element={<p>Привт</p>} />
        <Route path="/profileevent" element={<p>Привт</p>} />
        <Route path="/allevents" element={<p>Привт</p>} />
        <Route path="/register" element={<Register />} />
    </Routes>
  
  )
}