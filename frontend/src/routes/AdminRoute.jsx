import {useAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'


const AdminRoute = ({children}) => {
    const {loading, isAuthenticated, isAdmin} = useAuth()
    const navigate = useNavigate()

    if (loading) {
        return <p>Carregando...</p>
    }

    if (!isAuthenticated) {
        return navigate('/login')
    }

    if (!isAdmin) {
        return navigate('/')
    }

    return children
}

export default AdminRoute