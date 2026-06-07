import NewsServices from '../services/NewsServices.js'

class NewsController {
    constructor() {
        this.newsServices = new NewsServices()
    }

    visualizarNoticias = async (req,res) => {
        try {
            const resultado = await this.newsServices.visualizarNoticias()

            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(400).json({
                    "message": "Nenhuma noticia encontrada"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    visualizarNoticiasID = async (req,res) => {

        try {
            const idNoticia = req.params.id
    
            const resultado = this.newsServices.visualizarNoticiasID({idNoticia})
    
            if (resultado) {
                res.status(200).json(resultado)
            } else {
                res.status(400).json({
                    "message": "Erro ao encontrar noticia"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    adicionarNoticia = async (req,res) => {
        try {
            const {titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool, usuarioId} = req.body

            const resultado = await this.newsServices.adicionarNoticia({titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool, usuarioId})

            if (resultado) {
                res.status(201).json(resultado)
            } else {
                res.status(400).json({
                    "message": "Falha ao adicionar noticia"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    editarNoticia = async (req,res) => {
        try {
            const idNoticia = req.params.id
            const {titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool} = req.body
            const resultado = await this.newsServices.editarNoticia({idNoticia, titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool})

            if (resultado) {
                res.status(200).json(resultado)
            } else {
                res.status(404).json({
                    "message": "Falha ao editar noticia"
                })
            }
        } catch (error) {
            res.status(404).json({
                "error": error.message
            })
        }
    }

    alterarStatusNoticia = async (req,res) => {
        try {
            const idNoticia = req.params.id
            const statusBool = req.body.statusBool
            const resultado = await this.newsServices.alterarStatusNoticia({idNoticia, statusBool})

            if (resultado) {
                res.status(200).json(resultado)
            } else {
                res.status(400).json({
                    "message": "Falha ao alterar status"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }
}

export default NewsController