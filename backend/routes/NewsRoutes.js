import express from 'express'
import NewsController from '../controllers/NewsControllers.js'
import AuthMiddleware from '../middlewares/AuthMiddleware.js'
import AdminMiddleware from '../middlewares/AdminMiddleware.js'

const NewsRouter = express.Router()
const newsController = new NewsController()

NewsRouter.get('/noticias', newsController.visualizarNoticias)

NewsRouter.get('/noticias/:id', newsController.visualizarNoticiasID)

NewsRouter.post('/noticias', AuthMiddleware, AdminMiddleware, newsController.adicionarNoticia)

NewsRouter.put('/noticias/:id', AuthMiddleware, AdminMiddleware, newsController.editarNoticia)

NewsRouter.patch('/noticias/:id', AuthMiddleware, AdminMiddleware, newsController.alterarStatusNoticia)

export default NewsRouter