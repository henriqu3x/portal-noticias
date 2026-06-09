import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginScreen from "../pages/LoginScreen/LoginScreen"
import NotFound from "../pages/NotFound/NotFound"
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen"
import Admin from "../pages/Admin/Admin"
import Noticia from "../pages/Noticia/Noticia"
import NoticiasRecentes from "../pages/NoticiasRecentes/NoticiasRecentes"
import AdminRoute from "./AdminRoute"
import NoticiasPesquisa from "../pages/NoticiasPesquisa/NoticiasPesquisa"

const Paths = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/register' element={<RegisterScreen/>}/>
                    <Route path='/admin' element={<AdminRoute>
                        <Admin/>
                    </AdminRoute>}/>
                    <Route path='/noticia/:id' element={<Noticia/>}/>
                    <Route path='/noticias-recentes' element={<NoticiasRecentes/>}/>
                    <Route path='/noticias' element={<NoticiasPesquisa/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths