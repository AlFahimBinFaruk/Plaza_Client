import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


export const order_api = createApi({
    reducerPath: 'order_api',
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
    tagTypes: ["Order"],
    endpoints: (builder) => ({

        placeOrder:builder.mutation({
            query:(data)=>({
                url:"/order/place-order",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Order"]
        }),

        getMyOrderList:builder.query({
            query:()=>({
                url:"/order/my-order-list",
                method:"GET",
            }),
            providesTags:["Order"]
        }),

        getMyOrderDetails:builder.query({
            query:(id)=>({
                url:`/order/my-order-details/${id}`,
                method:"GET",
            }),
            providesTags:["Order"]
        }),



        updateOrder:builder.mutation({
            query:({id,...data})=>({
                url:`/order/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Order"]
        }),


        

    }),
});

export const {

    usePlaceOrderMutation,
    useGetMyOrderListQuery,
    useGetMyOrderDetailsQuery,
    useUpdateOrderMutation

} = order_api;