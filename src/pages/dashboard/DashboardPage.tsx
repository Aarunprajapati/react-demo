import React, { lazy } from 'react';
import { envConfig } from '../../config/envConfig';

const DashboardLayout = lazy(() =>
    import(`../../clients/${envConfig.orgName}/dashboard/DashboardLayout.tsx`)
);


const DashboardPage: React.FC = () => {
    return (
        <DashboardLayout />
    )
    
}

export default DashboardPage;
