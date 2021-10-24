import {
	DeliveryMethods,
	NotificationType,
	RequestStatusType,
} from '$types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StatusType = string | null;

interface IUIState {
	deliveryMethods: { name: DeliveryMethods }[];
	requestStatus: {
		status: RequestStatusType;
		error: StatusType;
	};
	notification: {
		message: StatusType;
		type: NotificationType;
	};
	isCartVisible: boolean;
	isPaymentVisible: boolean;
}

const initialUIState: IUIState = {
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
};

const uiSlice = createSlice({
	name: 'ui',
	initialState: initialUIState,
	reducers: {
		setNotification(
			state,
			action: PayloadAction<{ message: StatusType; type: NotificationType }>
		) {
			state.notification = {
				message: action.payload.message,
				type: action.payload.type,
			};
		},
		removeNotification(state) {
			state.notification = {
				message: null,
				type: null,
			};
		},
		setRequestStatus(
			state,
			action: PayloadAction<{ status: RequestStatusType; error: StatusType }>
		) {
			state.requestStatus = {
				status: action.payload.status,
				error: action.payload.error,
			};
		},
		changeOrderVisibility(
			state,
			action: PayloadAction<{
				isCartVisible: boolean;
				isPaymentVisible: boolean;
			}>
		) {
			state.isCartVisible = action.payload.isCartVisible;
			state.isPaymentVisible = action.payload.isPaymentVisible;
		},
	},
});

export const {
	changeOrderVisibility,
	setNotification,
	removeNotification,
	setRequestStatus,
} = uiSlice.actions;

export default uiSlice.reducer;
