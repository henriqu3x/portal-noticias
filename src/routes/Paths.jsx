import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginScreen from "../pages/LoginScreen/LoginScreen"
import NotFound from "../pages/NotFound/NotFound"
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen"
import Admin from "../pages/Admin/Admin"
import Noticia from "../pages/Noticia/Noticia"

const Paths = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/register' element={<RegisterScreen/>}/>
                    <Route path='/admin' element={<Admin/>}/>
                    <Route path='/noticia/:id' element={<Noticia/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths