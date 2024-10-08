import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export const user_api = createApi({
    reducerPath: 'user_api',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {


            const token = localStorage.getItem("token");
            // getState().auth.token ||
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            headers.set("Content-Type", "application/json");

            return headers;
        }
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({



        loginUser: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),

        registerUser: builder.mutation({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),

        logoutUser: builder.query({
            query: () => ({
                url: ""
            }),
            invalidatesTags: ["User"]
        }),

       

        
        
        getMyProfile: builder.query({
            query: () => ({
                url: "/user/my-profile"
            }),
            providesTags: ["User"]

        }),



        
    }),
});

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useLogoutUserQuery,
    useGetMyProfileQuery,

    

} = user_api;