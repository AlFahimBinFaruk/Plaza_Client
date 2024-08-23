import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { product_api } from './services/product_api';
import { order_api } from './services/order_api';
import { user_api } from './services/user_api';


const store = configureStore({
    reducer: {
        [product_api.reducerPath]: product_api.reducer,
        [order_api.reducerPath]: order_api.reducer,
        [user_api.reducerPath]: user_api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(product_api.middleware)
            .concat(order_api.middleware)
            .concat(user_api.middleware)
});

setupListeners(store.dispatch);

export default store;