import { configureStore } from '@reduxjs/toolkit'
import { BaseApis } from '../config/BaseApi'

const store = configureStore({
    reducer: {
        [BaseApis.reducerPath]: BaseApis.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(BaseApis.middleware)
    },
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
