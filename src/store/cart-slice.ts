import { ICartProduct, IProduct } from '$types/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProductsState {
	items: ICartProduct[];
	totalPrice: number;
	discount: number | null;
}

const initialState: IProductsState = {
	items: [],
	totalPrice: 0,
	discount: null,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(
			state: IProductsState,
			action: PayloadAction<
				Omit<IProduct, 'maxQuantity' | 'totalPrice' | 'art'>
			>
		) {
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
					img_src: newItem.img_src,
					maxQuantity: newItem.quantity,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		updateItemQuantity(
			state: IProductsState,
			action: PayloadAction<{ quantity: number; id: string }>
		) {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (!existingItem) return;

			existingItem.quantity = action.payload.quantity;
			existingItem.totalPrice = existingItem.price * action.payload.quantity;

			state.totalPrice = state.items.reduce((total, item) => {
				return total + item.totalPrice;
			}, 0);
		},
		removeItem(state: IProductsState, action: PayloadAction<{ id: string }>) {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			state.items = state.items.filter((item) => item.id !== action.payload.id);

			if (existingItem) {
				state.totalPrice = state.totalPrice - existingItem.totalPrice;
			}
		},
	},
});

export const { addProduct, removeItem, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
