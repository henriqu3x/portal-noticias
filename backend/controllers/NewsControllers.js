import NewsServices from '../services/NewsServices.js'

class NewsController {
    constructor() {
        this.newsServices = new NewsServices()
    }

    visualizarNoticias = async (req, res) => {
        let limit = false

        try {
            if (req.query?.limit) {
                limit = req.query?.limit
            }

            let resultado

            if (limit) {
                resultado = await this.newsServices.visualizarNoticias(limit)
            } else {
                resultado = await this.newsServices.visualizarNoticias()
            }


            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(200).json([])
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    visualizarNoticiasPesquisa = async (req, res) => {
        try {
            const termo = req.query?.termo

            const resultado = await this.newsServices.visualizarNoticiasPesquisa(termo)

            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(200).json([])
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    visualizarNoticiasAdmin = async (req, res) => {
        try {
            const resultado = await this.newsServices.visualizarNoticiasAdmin()

            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(200).json([])
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    visualizarNoticiasID = async (req, res) => {

        try {
            const idNoticia = req.params.id

            const resultado = await this.newsServices.visualizarNoticiasID({ idNoticia })

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

    adicionarNoticia = async (req, res) => {
        try {
            const { titulo, descricao, imagemUrl, imagemAlt, conteudo, status, usuarioId } = req.body

            const resultado = await this.newsServices.adicionarNoticia({ titulo, descricao, imagemUrl, imagemAlt, conteudo, status, usuarioId })

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

    editarNoticia = async (req, res) => {
        try {
            const idNoticia = req.params.id
            const { titulo, descricao, imagemUrl, imagemAlt, conteudo, status } = req.body
            const resultado = await this.newsServices.editarNoticia({ idNoticia, titulo, descricao, imagemUrl, imagemAlt, conteudo, status })

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

    alterarStatusNoticia = async (req, res) => {
        try {
            const idNoticia = req.params.id
            const status = req.body.status
            const resultado = await this.newsServices.alterarStatusNoticia({ idNoticia, status })

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