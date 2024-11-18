import './config/i18n.ts';
import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { envConfig } from './config/envConfig.ts'
import { Provider } from 'react-redux'
import store from './redux/store.ts'


const ThemeProvider = lazy(() => import(`./clients/${envConfig.orgName}/styles/ThemeProvider.tsx`))


createRoot(document.getElementById('app')!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </StrictMode>
)
