import { DeliveryMethods, PaymentMethod } from '$types/index';
import { createSlice } from '@reduxjs/toolkit';

interface IPaymentState {
	method: PaymentMethod;
	deliveryMethod: DeliveryMethods;
}

const initialState: IPaymentState = {
	method: 'card',
	deliveryMethod: 'Dine In',
};

const paymentSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		changeDeliveyMethod(
			state: IPaymentState,
			action: { payload: { deliveryMethod: DeliveryMethods } }
		) {
			state.deliveryMethod = action.payload.deliveryMethod;
		},
	},
});

export const { changeDeliveyMethod } = paymentSlice.actions;

export default paymentSlice.reducer;
