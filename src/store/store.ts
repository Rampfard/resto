import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import productSlice from './products-slice';
import uiSlice from './ui-slice';
import paymentSlice from './payment-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		products: productSlice,
		ui: uiSlice,
		payment: paymentSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
