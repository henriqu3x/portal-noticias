import express from 'express'
import NewsController from '../controllers/NewsControllers.js'
import AuthMiddleware from '../middlewares/AuthMiddleware.js'
import NewsMiddleware from '../middlewares/NewsMiddleware.js'

const NewsRouter = express.Router()
const newsController = new NewsController()
const authMiddleware = AuthMiddleware
const newsMiddleware = NewsMiddleware

NewsRouter.get('/noticias', newsController.visualizarNoticias)

NewsRouter.get('/noticias/:id', newsController.visualizarNoticiasID)

NewsRouter.post('/noticias', authMiddleware, newsMiddleware, newsController.adicionarNoticia)

NewsRouter.put('/noticias/:id', authMiddleware, newsMiddleware, newsController.editarNoticia)

NewsRouter.patch('/noticias/:id', authMiddleware, newsMiddleware, newsController.alterarStatusNoticia)

export default NewsRouter