import prisma from "../prisma/client.js"

class UsersServices {
    visualizarUsuarios = async () => {
        const usuarios = await prisma.usuario.findMany({
            include:{
                perfil:true
            }
        })

        return usuarios.map((usuario) => ({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            perfil: usuario.perfil.tipo_perfil
        }))
    }

    alterarStatus = async ({id, status}) => {
        const perfil = await prisma.perfil.findFirst({
            where:{
                tipo_perfil: status
            }
        })

        if (!perfil) {
            throw new Error("Perfil não encontrado");
        }

        const novoStatus = await prisma.usuario.update({
            where:{
                id: id
            },
            data:{
                perfil_id: perfil.id
            },
            include:{
                perfil: true
            }
        })

        return {
            id: novoStatus.id,
            nome: novoStatus.nome,
            tipo_perfil: novoStatus.perfil.tipo_perfil
        }
    }

    deletarUsuario = async ({id}) => {
        const usuarioDeletado = await prisma.usuario.delete({
            where:{
                id:id
            },
            include:{
                perfil:true
            }
        })

        return {
            id: usuarioDeletado.id,
            nome: usuarioDeletado.nome,
            tipo: usuarioDeletado.perfil.tipo_perfil,
            message: "Usuario deletado com sucesso!"
        }
    }
}

export default UsersServices