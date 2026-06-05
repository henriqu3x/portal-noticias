import bcrypt from 'bcrypt'
import prisma from '../prisma/client.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

class AuthServices {
    async register({usuario, email, senha, repita_senha}) {
        const usuarioUnico = await prisma.usuario.findUnique({
            where: {email}
        })

        if (usuarioUnico) {
            throw new Error("Já existe um usuario com esse email");
        }

        if (senha != repita_senha) {
            throw new Error("As senhas não batem");
        }

        const senhaHasheada = await bcrypt.hash(senha, 10)
        const tipo_perfil = await prisma.perfil.findFirst({
            where:{
                tipo_perfil:'cliente'
            }
        })
        if (!tipo_perfil){
            throw new Error("Perfil não encontrado");
        }

        const usuarioMock = {
            usuario,
            email,
            senhaHasheada,
            tipo: tipo_perfil.id
        }

        const usuarioBanco = await prisma.usuario.create({
            data:{
                nome: usuarioMock.usuario,
                email: usuarioMock.email,
                senha: usuarioMock.senhaHasheada,
                perfil_id: usuarioMock.tipo
            }
        })

        return {
            id: usuarioBanco.id,
            nome: usuarioBanco.nome,
            email: usuarioBanco.email,
            tipo: 'cliente'
        }
    }

    async login({email, senha}){
        const usuario = await prisma.usuario.findFirst({
            where:{
                email: email
            },
            include: {
                perfil: true
            }
        })

        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }

        const validarSenha = await bcrypt.compare(senha, usuario.senha)

        if (!validarSenha) {
            throw new Error("Senha invalida");
        }

        const token = jwt.sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.perfil.tipo_perfil
        }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        const user = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.perfil.tipo_perfil
        }

        return {
            user,
            token
        }
    }
}

export default AuthServices