import express from 'express'
import NewsController from '../controllers/NewsControllers.js'

const NewsRouter = express.Router()
const newsController = new NewsController()

NewsRouter.get('/noticias', newsController.visualizarNoticias)

NewsRouter.get('/noticias/:id', newsController.visualizarNoticiasID)

NewsRouter.post('/noticias', newsController.adicionarNoticia)

NewsRouter.put('/noticias', newsController.editarNoticia)

NewsRouter.patch('/noticias', newsController.alterarStatusNoticia)

export default NewsRouter