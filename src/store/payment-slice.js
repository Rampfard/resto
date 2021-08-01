import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	method: 'card',
	deliveryMethod: 'Dine In',
};

const paymentSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeDeliveyMethod(state, action) {
			state.deliveryMethod = action.payload.deliveryMethod;
		},
	},
});

export const paymentActions = paymentSlice.actions;

export default paymentSlice.reducer;
