import { NavLink } from "react-router-dom";
import "./registerScreen.css";
import { useState } from "react";

const RegisterScreen = () => {
     const [showPass, setShowPass] = useState(false)
     const [showPassRepita, setShowPassRepita] = useState(false)

     const showPassword = () => {
          setShowPass(!showPass)
     }

     const showPasswordRepita = () => {
          setShowPassRepita(!showPassRepita)
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
        <form>
          <label htmlFor="usuario">Nome:</label>
          <input required name="usuario" id="usuario" type="text" placeholder="Ex: Carlos" />

          <label htmlFor="email">Email:</label>
          <input required name="email" id="email" type="email" placeholder="Ex: example@email.com" />

          <label htmlFor="senha">Senha:</label>
          <div className="input-senha">
            <input required name="senha" id="senha" type={showPass?'text':'password'} placeholder="Ex: Carlos2090!" />
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
            />
            <div className="box-eye" onClick={showPasswordRepita}>
               <i className="fa-solid fa-eye i-eye"></i>
            </div>
          </div>

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
