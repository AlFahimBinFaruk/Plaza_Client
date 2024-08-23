import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export const product_api = createApi({
    reducerPath: 'product_api',
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
    tagTypes: ["Product"],
    endpoints: (builder) => ({





        getProductList: builder.query({
            query: ({page}) => `/product/all?page=${page}`,
            providesTags: ["Product"]
        }),
        getProductDetails: builder.query({
            query: (id) => ({
                url: `/product/details/${id}`
            }),
            providesTags: ["Product"]
        })

    }),
});

export const {

    useGetProductListQuery,
    useGetProductDetailsQuery

} = product_api;