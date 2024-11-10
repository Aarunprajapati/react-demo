import { lazy } from "react"
import { envConfig } from "../../config/envConfig"


const LoginLayout = lazy(() => import(`../../clients/${envConfig.orgName}/login/LoginLayout.tsx`))


const LoginPage = () => {


  const props = {}
  return <LoginLayout {...props} />
}

export default LoginPage
