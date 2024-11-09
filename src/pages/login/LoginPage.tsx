import { lazy } from "react"
import { envConfig } from "../../config/envConfig"

const LoginLayout = lazy(()=> import(`../../clients${envConfig.orgName}/login/LoginLayout}`)) 


const LoginPage = () => {
  return <LoginLayout/>
}

export default LoginPage
