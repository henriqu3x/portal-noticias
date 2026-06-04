import express from 'express'
import cors from 'cors'
import AuthRoutes from './routes/AuthRoutes.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({
        message:"API ONLINE"
    })
})

app.use(AuthRoutes)

app.use((req,res) => {
    res.status(404).json({
        "message": "Rota não encontrada"
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})