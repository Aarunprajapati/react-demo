import { lazy, useEffect } from 'react'
import { envConfig } from '../../config/envConfig'
import { useLazyLoginQuery } from './LoginApi'
import { useNavigate } from 'react-router'
import { Form, message } from 'antd'
import { getApiMessage } from '../../utils/utils'

const LoginLayout = lazy(
    () => import(`../../clients/${envConfig.orgName}/login/LoginLayout.tsx`)
)

const LoginPage = () => {
    const token = localStorage.getItem('token')
    const [login, { isFetching }] = useLazyLoginQuery()

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
        const res = await login(data).unwrap()
        if (!res && !res.data) {
            message.error(getApiMessage(res))
        }

        if (res?.data) {
            localStorage.setItem('token', res?.data?.token)
            navigate('/dashboard')
        }
    }
    useEffect(() => {
        if (token) {
            navigate('/dashboard')
        }
    }, [])

    const props = {
        form: LoginForm,
        handleOnSubmit,
        isFetching,
    }
    return <LoginLayout {...props} />
}

export default LoginPage
