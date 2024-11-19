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
            colorPrimary: '#0068fa',
            colorPrimaryHover: '#0068fa',
            primaryColor: '#fff',
            colorPrimaryActive: '#0068fa',
            defaultBorderColor: '#0068fa',
            defaultColor: '#0068fa',
        },
    },
}
const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
    return <ConfigProvider theme={Theme}>{children}</ConfigProvider>
}

export default ThemeProvider
