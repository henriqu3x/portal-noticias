import bcrypt from 'bcrypt'
import prisma from '../prisma/client'

class AuthServices {
    async register({nome, email, senha}) {
        const usuarioUnico = await prisma.usuario.findUnique({
            where: {email}
        })

        if (usuarioUnico) {
            throw new Error("Já existe um usuario com esse email");
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

        const usuario = {
            nome,
            email,
            senhaHasheada,
            tipo: tipo_perfil.id
        }

        const usuarioBanco = await prisma.usuario.create({
            data:{
                nome: usuario.nome,
                email: usuario.email,
                senha: usuario.senhaHasheada,
                perfil_id: usuario.tipo
            }
        })

        return {
            id: usuarioBanco.id,
            nome: usuarioBanco.nome,
            email: usuarioBanco.email,
            tipo: 'cliente'
        }
    }

    async login({nome, email,senha}){

    }
}