import { NavLink } from 'react-router-dom'
import './loginScreen.css'
import { useState } from 'react'
import {useAuth} from '../../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const LoginScreen = () => {
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const {login} = useAuth()
    const navigate = useNavigate()

    const showPassword = () => {
        setShowPass(!showPass)
    }

    const fazerLogin = async (e) => {
        e.preventDefault()

        try {
            setError('')
            
            const user = await login(email, senha)

            if (user.tipo == 'admin') {
                navigate('/admin')
            } else {
                navigate('/')
            }

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <main className='section-login'>
            <section className='login'>
                <NavLink aria-label='Voltar para tela inicial' className='a-voltar' to={'/'}><i className="fa-solid fa-arrow-left i-voltar"></i></NavLink>
                <div className='text-content'>
                    <h2>F5</h2>
                    <h3>Faça login para acessar todas as notícias disponíveis.</h3>
                </div>
                <form onSubmit={fazerLogin}>
                    <label htmlFor="email">Email:</label>
                    <input id='email' type="email" placeholder='Ex: example@email.com' 
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha:</label>
                    <div className='input-senha'>
                        <input id='senha' type={showPass ? 'text' : 'password'} placeholder='Ex: Carlos2090!' 
                        onChange={(e) => setSenha(e.target.value)}
                        />
                        <div onClick={showPassword} className='box-eye'>
                            <i className="fa-solid fa-eye i-eye"></i>
                        </div>
                    </div>

                    {error? <p>{error}</p> : null}

                    <button aria-label='Fazer-Login' type='submit'>
                        Entrar
                    </button>
                </form>

                <div className='divisor'>
                    <p>OU</p>
                </div>

                <NavLink to={'/register'} className='criar-conta' aria-label='Criar-conta'>
                    Criar Conta
                </NavLink>
            </section>
        </main>
    )
}

export default LoginScreen