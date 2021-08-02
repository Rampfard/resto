import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		deliveryMethods: [
			{ name: 'Dine In' },
			{ name: 'Delivery' },
			{ name: 'To Go' },
		],
		requestStatus: {
			status: null,
			error: null,
		},
		notification: {
			message: null,
			type: null,
		},
		isCartVisible: false,
		isPaymentVisible: false,
	},
	reducers: {
		setNotification(state, action) {
			state.notification = {
				message: action.payload.message,
				type: action.payload.type,
			};
		},
		setRequestStatus(state, action) {
			state.requestStatus = {
				status: action.payload.status,
				error: action.payload.error,
			};
		},
		changeOrderVisibility(state, action) {
			state.isCartVisible = action.payload.isCartVisible;
			state.isPaymentVisible = action.payload.isPaymentVisible;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
