import { useEffect, useState } from 'react'
import './modal.css'

const Modal = (props) => {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagemUrl, setImagemUrl] = useState('')
    const [imagemAlt, setImagemAlt] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if (props.mode == 'att') {
            setTitulo(props.noticia.titulo)
            setDescricao(props.noticia.descricao)
            setImagemUrl(props.noticia.imagemUrl)
            setImagemAlt(props.noticia.imagemAlt)
            setConteudo(props.noticia.conteudo)
            setStatus(props.noticia.status)
        }

        if (props.mode == 'add') {
            setTitulo('')
            setDescricao('')
            setImagemUrl('')
            setImagemAlt('')
            setConteudo('')
            setStatus(true)
        }
    }, [props.mode, props.noticia])


    const formularioSubmit = (e) => {
        e.preventDefault()

        let statusBool = Boolean(status)

        props.onSubmit(props.noticia?.id, titulo, descricao, imagemUrl, imagemAlt, conteudo, statusBool, props.mode)

        props.onClose()
    }
    
    return(
        <div className='overlay' onClick={props.onClose}>
            <section className='modal' onClick={(e) => e.stopPropagation()}>
                <div className='box-text'>
                    <h2>{props.mode == 'add'?'Adicionar Noticia':'Editar Noticia'}</h2>
                    <div onClick={props.onClose}>
                        <i className="fa-solid fa-x i-fechar"></i>
                    </div>
                </div>

                <form className='formulario' onSubmit={formularioSubmit}>
                    <label htmlFor="titulo">Titulo:</label>
                    <input required onChange={(e) => setTitulo(e.target.value)} id='titulo' type="text" placeholder='Ex: Seleção Brasileira...' value={titulo ?? ''}/>

                    <label htmlFor="descricao">Descricão:</label>
                    <input required onChange={(e) => setDescricao(e.target.value)} id='descricao' type="text" placeholder='Ex: Durante Treinamento...' value={descricao?? ''}/>

                    <label htmlFor="imagem">Imagem (Url):</label>
                    <input required onChange={(e) => setImagemUrl(e.target.value)} id='imagem' type="url" placeholder='Ex: https://site.com/imagem' value={imagemUrl?? ''}/>

                    <label htmlFor="imagem-alt">Imagem (Alt):</label>
                    <input required onChange={(e) => setImagemAlt(e.target.value)} id='imagem-alt' type="text" placeholder='Ex: Jogadores da seleção brasileira' value={imagemAlt?? ''}/>

                    <label htmlFor="conteudo">Conteudo:</label>
                    <textarea required onChange={(e) => setConteudo(e.target.value)} name="conteudo" id="conteudo" placeholder='Ex: A roupa usada pelos jogadores...' value={conteudo?? ''}></textarea>

                    <label htmlFor="status">Status:</label>
                    <select required onChange={(e) => setStatus(e.target.value === 'true')} aria-label='selecionar-status' name="status" id="status" value={String(status)}>
                        <option value="true">Ativo</option>
                        <option value="false">Arquivado</option>
                    </select>

                    <button type='submit' className='btn' aria-label='adicionar-noticia'>{props.mode == 'add'?'Adicionar':'Atualizar'}</button>
                </form>
            </section>
        </div>
    )
}

export default Modal