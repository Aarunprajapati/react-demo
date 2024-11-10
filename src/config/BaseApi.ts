import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "./httpConfig";

const token = localStorage.getItem('token');

const baseQuery = fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (header:Headers)=>{
        if(token){
            header.set('Authorization', `Bearer ${token}`);
        }
        header.set('Content-Type', 'application/json');
        return header;
    }
    
});

const BaseQueryfunction: BaseQueryFn = async ( args, api, extraOptions) => {
    const response = await baseQuery(args, api, extraOptions);
    return response;
    
}

export const BaseApis = createApi({
    reducerPath: "api",
    baseQuery:BaseQueryfunction,
    endpoints: () => ({})
})