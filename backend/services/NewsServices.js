import prisma from "../prisma/client.js"

class NewsServices {
    visualizarNoticias = async (limit) => {
        let noticias

        if (limit) {
            noticias = await prisma.noticia.findMany({
                take:5,
                include: {
                    image: true
                },
                orderBy:{
                    data_publicacao: 'desc'
                }
            }) 
        } else {
            noticias = await prisma.noticia.findMany({
                include: {
                    image: true
                },
                orderBy: {
                    data_publicacao: "desc"
                }
            }) 
        }


        return noticias.map((noticia) => ({
            id: noticia.id,
            titulo: noticia.titulo,
            descricao: noticia.descricao,
            status: noticia.status,
            imagemUrl: noticia.image.url,
            imagemAlt: noticia.image.alt,
            dataPublicacao: noticia.data_publicacao,
            dataAtualizacao: noticia.data_atualizacao,
            conteudo: noticia.conteudo
        }))
    }

    visualizarNoticiasID = async ({idNoticia}) => {
        const noticia = await prisma.noticia.findUnique({
            where:{
                id:idNoticia
            },
            include:{
                image:true
            }
        })

        if (!noticia) {
            throw new Error("Nenhuma noticia encontrada com esse id");
        }

        return {
            id: noticia.id,
            titulo: noticia.titulo,
            descricao: noticia.descricao,
            status: noticia.status,
            imagemUrl: noticia.image.url,
            imagemAlt: noticia.image.alt,
            dataPublicacao: noticia.data_publicacao,
            dataAtualizacao: noticia.data_atualizacao,
            conteudo: noticia.conteudo
        }
    }

    adicionarNoticia = async ({ titulo, descricao, imagemUrl, imagemAlt, conteudo, status, usuarioId }) => {
        if (!titulo) {
            throw new Error("Titulo vazio");
        }

        if (!descricao) {
            throw new Error("Descrição vazia");
        }

        if (!imagemUrl) {
            throw new Error("Url da imagem vazio");
        }

        if (!imagemAlt) {
            throw new Error("Alt da imagem vazio");
        }

        if (!conteudo) {
            throw new Error("Conteudo vazio");
        }

        if (!status) {
            throw new Error("Status não selecionado");
        }

        if (!usuarioId) {
            throw new Error("Usuario id não informado");
        }

        const usuario = await prisma.usuario.findUnique({
            where:{
                id:usuarioId
            }
        })

        if(!usuario){
            throw new Error("Usuario não encontrado");
        }

        const resultado = await prisma.$transaction(async (tx) => {
            const imagem = await tx.image.create({
                data: {
                    url: imagemUrl,
                    alt: imagemAlt
                }
            })

            const noticia = await tx.noticia.create({
                data: {
                    titulo: titulo,
                    descricao: descricao,
                    status: status,
                    image_id: imagem.id,
                    usuario_id: usuarioId,
                    conteudo: conteudo
                }
            })

            return {
                titulo: noticia.titulo,
                descricao: noticia.descricao,
                status: noticia.status,
                imagemurl: imagem.url,
                imagemAlt: imagem.alt,
                usuarioId: noticia.usuario_id,
                conteudo: noticia.conteudo,
                dataPublicacao: noticia.data_publicacao,
                dataAtualizacao: noticia.data_atualizacao
            }
        })

        return resultado

    }

    editarNoticia = async ({ idNoticia, titulo, descricao, imagemUrl, imagemAlt, conteudo, status }) => {
        const noticia = await prisma.noticia.findUnique({
            where: {
                id: idNoticia
            }
        })

        if (!noticia) {
            throw new Error("Noticia não encontrada");
        }

        if (!titulo) {
            throw new Error("Titulo vazio");
        }

        if (!descricao) {
            throw new Error("Descrição vazia");
        }

        if (!imagemUrl) {
            throw new Error("Url da imagem vazio");
        }

        if (!imagemAlt) {
            throw new Error("Alt da imagem vazio");
        }

        if (!conteudo) {
            throw new Error("Conteudo vazio");
        }

        if (status == undefined || status == null) {
            throw new Error("Status não selecionado");
        }

        const resultado = await prisma.$transaction(async (tx) => {
            await tx.image.update({
                where: {
                    id: noticia.image_id
                },
                data: {
                    url: imagemUrl,
                    alt: imagemAlt
                }
            })

            const noticiaAtualizada = await tx.noticia.update({
                where: {
                    id: idNoticia
                },
                data: {
                    titulo: titulo,
                    descricao: descricao,
                    status: status,
                    conteudo: conteudo
                },
                include: {
                    image: true
                }
            })

            return {
                id: noticiaAtualizada.id,
                titulo: noticiaAtualizada.titulo,
                descricao: noticiaAtualizada.descricao,
                status: noticiaAtualizada.status,
                imagemUrl: noticiaAtualizada.image.url,
                imagemAlt: noticiaAtualizada.image.alt,
                conteudo: noticiaAtualizada.conteudo,
                dataPublicacao: noticiaAtualizada.data_publicacao,
                dataAtualizacao: noticiaAtualizada.data_atualizacao
            }
        })

        return resultado
    }

    alterarStatusNoticia = async ({ idNoticia, status }) => {
        const verificacaoNoticia = await prisma.noticia.findUnique({
            where:{
                id:idNoticia
            }
        })

        if (!verificacaoNoticia) {
            throw new Error("Noticia não encontrada");
        }

        const noticia = await prisma.noticia.update({
            where: {
                id: idNoticia
            },
            data: {
                status: status
            }
        })

        return {
            id: noticia.id,
            status: noticia.status
        }
    }
}

export default NewsServices