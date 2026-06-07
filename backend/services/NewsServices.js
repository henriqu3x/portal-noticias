import prisma from "../prisma/client.js"

class NewsServices {
    async visualizarNoticias() {
        const noticias = await prisma.noticia.findMany({
            include: {
                image: true
            }
        })

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

    async visualizarNoticiasID({idNoticia}) {
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

    async adicionarNoticia({ titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool, usuarioId }) {
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

        if (!statusBool) {
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
                    status: statusBool,
                    image_id: imagem.id,
                    usuario_id: usuarioId,
                    conteudo: conteudo
                }
            })

            return {
                titulo: noticia.titulo,
                descricao: noticia.descricao,
                statusBool: noticia.status,
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

    async editarNoticia({ idNoticia, titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool }) {
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

        if (!statusBool) {
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
                    status: statusBool,
                    conteudo: conteudo
                },
                include: {
                    image: true
                }
            })

            return {
                titulo: noticiaAtualizada.titulo,
                descricao: noticiaAtualizada.descricao,
                statusBool: noticiaAtualizada.status,
                imagemurl: noticiaAtualizada.image.url,
                imagemAlt: noticiaAtualizada.image.alt,
                conteudo: noticiaAtualizada.conteudo,
                dataPublicacao: noticiaAtualizada.data_publicacao,
                dataAtualizacao: noticiaAtualizada.data_atualizacao
            }
        })

        return resultado
    }

    async alterarStatusNoticia({ idNoticia, statusBool }) {
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
                status: statusBool
            }
        })

        return {
            id: noticia.id,
            status: noticia.status
        }
    }
}

export default NewsServices