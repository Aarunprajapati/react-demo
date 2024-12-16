import { lazy, useEffect } from 'react'
import { envConfig } from '../../config/envConfig'
// import { useLazyLoginQuery } from './LoginApi'
import { useNavigate } from 'react-router'
import { Form, message } from 'antd'
// import { getApiMessage } from '../../utils/utils'
import { login } from './fakeLoginApi'

const LoginLayout = lazy(
    () => import(`../../clients/${envConfig.orgName}/login/LoginLayout.tsx`)
)

const LoginPage = () => {
    const token = localStorage.getItem('token')
    // const [login] = useLazyLoginQuery()

    const navigate = useNavigate()
    const [LoginForm] = Form.useForm()

    const handleOnSubmit = async (fromValue: {
        email: string
        password: string
    }) => {
        const data = {
            ...fromValue,
            email: fromValue.email.trim(),
            password: fromValue.password.trim(),
        }
        try {
            const res = await login(data);

            if (res) {
                localStorage.setItem('token', res.data.token)
                message.success(res.data.message)
                navigate('/')
            }
        } catch (error) {
            message.error((error as Error).message || 'Failed to login')
        }
    }
    const registerClick = () => {
        navigate('/register')
    }
    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [])

    const props = {
        form: LoginForm,
        handleOnSubmit,
        registerClick
    }
    return <LoginLayout {...props} />
}

export default LoginPage
