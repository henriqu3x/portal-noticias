import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import LoginScreen from "../pages/LoginScreen/LoginScreen"
import NotFound from "../pages/NotFound/NotFound"
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen"

const Paths = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<LoginScreen/>}/>
                    <Route path='/register' element={<RegisterScreen/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Paths