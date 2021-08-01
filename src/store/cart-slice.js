import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			state.totalPrice = state.totalPrice + newItem.price;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
					type: newItem.type,
					img_src: newItem.img,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		updateItemQuantity(state, action) {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (action.payload.quantity < 0) {
				return;
			}

			if (action.payload.quantity > action.payload.maxQuantity) {
				existingItem.quantity = action.payload.maxQuantity;
			}

			existingItem.quantity = action.payload.quantity;
			existingItem.totalPrice = existingItem.price * action.payload.quantity;

			state.totalPrice = state.items.reduce((total, item) => {
				return total + item.totalPrice;
			}, 0);
		},
		removeItem(state, action) {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			state.items = state.items.filter((item) => item.id !== action.payload.id);

			state.totalPrice = state.totalPrice - existingItem.totalPrice;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
