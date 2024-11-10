import { BaseApis } from "../../config/BaseApi";
import { APIS } from "../../config/httpConfig";
import { ILogin } from "./LoginDto";

const LoginApi = BaseApis.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.query({
      query: (payload) => ({
        url: APIS.login,
        method: ILogin.POST,
        body: payload,
      }),
    }),
  }),
});

export const { useLazyLoginQuery } = LoginApi;
