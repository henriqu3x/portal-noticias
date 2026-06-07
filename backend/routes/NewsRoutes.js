import express from 'express'
import NewsController from '../controllers/NewsControllers.js'

const NewsRouter = express.Router()
const newsController = new NewsController()

NewsRouter.get('/noticias', (req,res) => newsController.visualizarNoticias(req,res))

NewsRouter.get('/noticias/:id', (req,res) => newsController.visualizarNoticiasID(req,res))

NewsRouter.post('/noticias', (req,res) => newsController.adicionarNoticia(req,res))

NewsRouter.put('/noticias', (req,res) => newsController.editarNoticia(req,res))

NewsRouter.patch('/noticias', (req,res) => newsController.alterarStatusNoticia(req,res))

export default NewsRouter