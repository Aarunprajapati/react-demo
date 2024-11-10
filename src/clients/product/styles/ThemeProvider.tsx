import { ConfigProvider, ThemeConfig } from 'antd'
import { ReactNode } from 'react'

interface IThemeProvider {
    children: ReactNode
}

const Theme: ThemeConfig = {
    token: {
        fontFamily: 'Poppins',
    },
    components: {
        Button: {
            colorText: '#fff',
            primaryColor: '#00AEEF',
            colorPrimaryActive: '#00AEEF',
            colorPrimaryHover: '#00AEEF',
        },
    },
}
const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
    return <ConfigProvider theme={Theme}>{children}</ConfigProvider>
}

export default ThemeProvider
