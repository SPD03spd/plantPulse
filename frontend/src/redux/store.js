import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import productReducer from "./Slices/productsSlice";
import cartReducer from "./Slices/cartSlice";
import checkoutReducer from "./Slices/checkoutSlice";
import orderReducer from "./Slices/orderSlice";
import adminReducer from "./Slices/adminSlice";
import adminProductReducer from "./Slices/adminProductSlice";
import adminOrderReducer from "./Slices/adminOrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    orders: orderReducer,
    admin: adminReducer,
    adminProducts: adminProductReducer,
    adminOrders: adminOrderReducer,
  },
});

export default store;
