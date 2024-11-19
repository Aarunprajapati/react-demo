import { configureStore } from '@reduxjs/toolkit'
import { BaseApis } from '../config/BaseApi'
import mainSlice from './mainSlice'

const store = configureStore({
    reducer: {
        [BaseApis.reducerPath]: BaseApis.reducer,
        [mainSlice.name]: mainSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(BaseApis.middleware)
    },
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
