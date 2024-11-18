import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { BaseUrl } from './httpConfig'

const baseQuery = fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (header: Headers) => {
        const token = localStorage.getItem('token')
        if (token) {
            header.set('Authorization', `Bearer ${token}`)
        }
        header.set('Content-Type', 'application/json')
        return header
    },
})

const BaseQueryfunction: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)

    const status = result?.data
    if (status === 511) {
        localStorage.clear()
        throw new Error('Network Authentication Required')
    }
    return result
}
export const BaseApis = createApi({
    reducerPath: 'api',
    baseQuery: BaseQueryfunction,
    keepUnusedDataFor: 300,
    endpoints: () => ({}),
})
