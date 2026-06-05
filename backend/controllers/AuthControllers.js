import AuthServices from '../services/AuthServices.js'


class AuthControllers {
    constructor() {
        this.authServices = new AuthServices()
    }

    async register(req,res){
        try {
            const {usuario, email, senha, repita_senha} = req.body
            const resultado = await this.authServices.register({usuario, email, senha, repita_senha})
    
            if(resultado){
                res.status(201).json({
                    message: "Usuario registrado com sucesso"
                })
            } else {
                res.status(400).json({
                    message: "Falha ao registrar usuario"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error":error.message
            })
        }
    }

    async login(req,res){
        try {
            const {email, senha} = req.body
            const resultado = await this.authServices.login({email, senha})
    
            if (resultado) {
                res.status(200).json({
                    message:"Usuario Logado",
                    token: resultado.token,
                    user: resultado.user
                })
            } else {
                res.status(400).json({
                    message: "Falha ao fazer login"
                })
            }
        } catch (error) {
            res.status(400).json({
                "error":error.message
            })
        }
    }
}

export default AuthControllers