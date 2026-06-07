import express from 'express'
import UserControllers from '../controllers/UserControllers'

const UserRoutes = express.Router()
const userControllers = new UserControllers()

UserRoutes.get('/usuarios', (req,res) => userControllers.visualizarUsuarios(req,res))

UserRoutes.patch('/usuarios', (req,res) => userControllers.alterarStatus(req,res))

UserRoutes.delete('/usuarios', (req,res) => userControllers.deletarUsuario(req,res))

export default UserRoutes