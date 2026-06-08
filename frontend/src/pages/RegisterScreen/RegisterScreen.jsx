import { NavLink } from "react-router-dom";
import "./registerScreen.css";
import { useState } from "react";
import {useAuth} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const RegisterScreen = () => {
     const [showPass, setShowPass] = useState(false)
     const [showPassRepita, setShowPassRepita] = useState(false)

     const [usuario, setUsuario] = useState('')
     const [email, setEmail] = useState('')
     const [senha, setSenha] = useState('')
     const [repita_senha, setRepitaSenha] = useState('')
     const [error, setError] = useState('')

     const {register} = useAuth()
     const navigate = useNavigate()

     const showPassword = () => {
          setShowPass(!showPass)
     }

     const showPasswordRepita = () => {
          setShowPassRepita(!showPassRepita)
     }

     const cadastar = async (e) => {
        e.preventDefault()

        try {
          setError('')

          const user = await register(usuario, email, senha, repita_senha)

          navigate('/login')
        } catch (error) {
          setError(error.message)
        }
     }

  return (
    <main className="section-register">
      <section className="register">
        <NavLink
          aria-label="Voltar para tela login"
          className="a-voltar"
          to={"/login"}
        >
          <i className="fa-solid fa-arrow-left i-voltar"></i>
        </NavLink>
        <div className="text-content">
          <h2>F5</h2>
          <h3>Cadastre-se para acessar todas as notícias disponíveis.</h3>
        </div>
        <form onSubmit={cadastar}>
          <label htmlFor="usuario">Nome:</label>
          <input required name="usuario" id="usuario" type="text" placeholder="Ex: Carlos" 
          onChange={(e) => setUsuario(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input required name="email" id="email" type="email" placeholder="Ex: example@email.com" 
          onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha:</label>
          <div className="input-senha">
            <input required name="senha" id="senha" type={showPass?'text':'password'} placeholder="Ex: Carlos2090!" 
            onChange={(e) => setSenha(e.target.value)}
            />
            <div className="box-eye" onClick={showPassword}>
              <i className="fa-solid fa-eye i-eye"></i>
            </div>
          </div>

          <label htmlFor="repita-senha">Repita sua senha:</label>
          <div className="input-senha">
            <input
              required
              name="repita-senha"
              id="repita-senha"
              type={showPassRepita?'text':'password'}
              placeholder="Ex: Carlos2090!"
              onChange={(e) => setRepitaSenha(e.target.value)}
            />
            <div className="box-eye" onClick={showPasswordRepita}>
               <i className="fa-solid fa-eye i-eye"></i>
            </div>
          </div>

          {error ? <p className="error">{error}</p> : null}

          <button aria-label="cadastrar" type="submit">
            Cadastrar
          </button>
        </form>

        <div className="divisor">
          <p>OU</p>
        </div>

        <NavLink to={"/login"} className="fazer-login" aria-label="fazer-login">
          Fazer Login
        </NavLink>
      </section>
    </main>
  );
};

export default RegisterScreen;
