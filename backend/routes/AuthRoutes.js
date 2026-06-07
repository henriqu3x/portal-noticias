import express from 'express'
import AuthControllers from '../controllers/AuthControllers.js'

const AuthRoutes = express.Router()
const authControllers = new AuthControllers()

AuthRoutes.post('/login', authControllers.login)

AuthRoutes.post('/register', authControllers.register)

export default AuthRoutes