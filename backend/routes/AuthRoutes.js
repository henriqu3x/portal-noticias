import express from 'express'
import AuthControllers from '../controllers/AuthControllers.js'

const AuthRoutes = express.Router()
const authControllers = new AuthControllers()

AuthRoutes.post('/login', (req,res) => authControllers.login(req,res))

AuthRoutes.post('/register', (req,res) => authControllers.register(req,res))

export default AuthRoutes