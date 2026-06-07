import jwt from 'jsonwebtoken'
import 'dotenv/config'

const AuthMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(400).json({
            "message": "Header não enviado"
        })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()
    } catch (error) {
        res.status(400).json({
            "error": error.message
        })
    }
}

export default AuthMiddleware