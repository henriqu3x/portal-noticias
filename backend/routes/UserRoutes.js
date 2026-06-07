import express from 'express'
import UserControllers from '../controllers/UserControllers'

const UserRoutes = express.Router()
const userControllers = new UserControllers()

UserRoutes.get('/usuarios', userControllers.visualizarUsuarios)

UserRoutes.patch('/usuarios/:id', userControllers.alterarStatus)

UserRoutes.delete('/usuarios/:id', userControllers.deletarUsuario)

export default UserRoutes