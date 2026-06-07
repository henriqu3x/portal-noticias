const NewsMiddleware = (req,res,next) => {
    const tipo = req.user.tipo

    if(!tipo){
        return res.status(401).json({
            "message": "Perfil do usuario não encontrado"
        })
    }

    if (tipo != "admin") {
        return res.status(403).json({
            "message": "Você não tem permissão suficiente"
        })
    }

    next()
}

export default NewsMiddleware