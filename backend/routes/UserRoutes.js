import express from 'express'
import UserControllers from '../controllers/UserControllers'
import AuthMiddleware from '../middlewares/AuthMiddleware'
import AdminMiddleware from '../middlewares/AdminMiddleware'

const UserRoutes = express.Router()
const userControllers = new UserControllers()

UserRoutes.get('/usuarios', AuthMiddleware, AdminMiddleware, userControllers.visualizarUsuarios)

UserRoutes.patch('/usuarios/:id', AuthMiddleware, AdminMiddleware, userControllers.alterarStatus)

UserRoutes.delete('/usuarios/:id', AuthMiddleware, AdminMiddleware, userControllers.deletarUsuario)

export default UserRoutes