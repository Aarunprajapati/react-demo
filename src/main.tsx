import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { envConfig } from './config/envConfig.ts'
const ThemeProvider = lazy(() => import(`./clients/${envConfig.orgName}/styles/ThemeProvider.tsx`))

createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <ThemeProvider >
            <App />
        </ThemeProvider>
    </StrictMode>
)
