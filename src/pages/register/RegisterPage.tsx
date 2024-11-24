import { lazy } from "react"
import { envConfig } from "../../config/envConfig"
import { useNavigate } from "react-router";

const Registerlayout = lazy(() => import(`../../clients/${envConfig.orgName}/register/Registerlayout.tsx`));
const RegisterPage = () => {
    const naviagte = useNavigate()

    const loginClick = () => {
        naviagte('/login')
    }

    const props = {
        loginClick
    }
    return (
        <Registerlayout {...props} />
    )
}

export default RegisterPage
