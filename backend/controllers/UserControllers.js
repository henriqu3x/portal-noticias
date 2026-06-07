import UserServices from '../services/UserServices.js'

class UserControllers {
    constructor() {
        this.userServices = new UserServices()
    }

    visualizarUsuarios = async (req,res) => {
        try {
            const resultado = this.userServices.visualizarUsuarios()
    
            if (resultado) {
                res.status(200).json(resultado)
            } else {
                res.status(400),json({
                    "message": "Nenhum usuario encontrado"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }

    alterarStatus = async (req,res) => {
        try {
            const id = req.params.id
            const status = req.body.status

            const resultado = this.userServices.alterarStatus({id, status})

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

    deletarUsuario = async (req,res) => {
        try {
            const id = req.params.id

            const resultado = this.userServices.deletarUsuario({id})

            if (resultado) {
                res.status(200).json(resultado)
            } else {
                res.status(400).json({
                    "message": "Falha ao deletar usuario"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
    }
}

export default UserControllers