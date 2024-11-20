import { lazy } from 'react'
import { envConfig } from '../../config/envConfig'

const DashboardLayout = lazy(
    () => import(`../../clients/${envConfig.orgName}/dashboard/DashboardLayout.tsx`)
)

const DashboardPage = () => {
    
    const props = {}
    return <DashboardLayout {...props} />
}

export default DashboardPage
