import express from 'express'
import UserControllers from '../controllers/UserControllers.js'
import AuthMiddleware from '../middlewares/AuthMiddleware.js'
import AdminMiddleware from '../middlewares/AdminMiddleware.js'

const UserRoutes = express.Router()
const userControllers = new UserControllers()

UserRoutes.get('/usuarios', AuthMiddleware, AdminMiddleware, userControllers.visualizarUsuarios)

UserRoutes.patch('/usuarios/:id', AuthMiddleware, AdminMiddleware, userControllers.alterarStatus)

UserRoutes.delete('/usuarios/:id', AuthMiddleware, AdminMiddleware, userControllers.deletarUsuario)

export default UserRoutes