import { configureStore } from "@reduxjs/toolkit";
import {  BaseApis } from "../config/BaseApi";


 const store = configureStore({
    reducer:{
        [BaseApis.reducerPath]: BaseApis.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(BaseApis.middleware);
    },

})
export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch