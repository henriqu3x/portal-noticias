import './modal.css'

const Modal = (props) => {
    return(
        <div className='overlay' onClick={props.onClose}>
            <section className='modal' onClick={(e) => e.stopPropagation()}>
                <div className='box-text'>
                    <h2>{props.mode == 'add'?'Adicionar Noticia':'Editar Noticia'}</h2>
                    <div onClick={props.onClose}>
                        <i className="fa-solid fa-x i-fechar"></i>
                    </div>
                </div>

                <form className='formulario'>
                    <label htmlFor="titulo">Titulo:</label>
                    <input id='titulo' type="text" placeholder='Ex: Seleção Brasileira...'/>

                    <label htmlFor="descricao">Descricão:</label>
                    <input id='descricao' type="text" placeholder='Ex: Durante Treinamento...'/>

                    <label htmlFor="imagem">Imagem (Url):</label>
                    <input id='imagem' type="text" placeholder='Ex: https://site.com/imagem'/>

                    <label htmlFor="imagem-alt">Imagem (Alt):</label>
                    <input id='imagem-alt' type="text" placeholder='Ex: Jogadores da seleção brasileira'/>

                    <label htmlFor="conteudo">Conteudo:</label>
                    <textarea name="conteudo" id="conteudo" placeholder='Ex: A roupa usada pelos jogadores...'></textarea>

                    <label htmlFor="status">Status:</label>
                    <select aria-label='selecionar-status' name="status" id="status">
                        <option value="true">Ativo</option>
                        <option value="false">Arquivado</option>
                    </select>

                    <button className='btn' aria-label='adicionar-noticia'>{props.mode == 'add'?'Adicionar':'Atualizar'}</button>
                </form>
            </section>
        </div>
    )
}

export default Modal