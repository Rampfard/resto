import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
	maxValues: {},
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		replaceProducts(state, action) {
			state.products = action.payload.products;
			const newValues = action.payload.products.reduce((obj, product) => {
				obj[product.id] = product.quantity;

				return obj;
			}, {});

			state.maxValues = { ...state.maxValues, ...newValues };
		},
		updateProduct(state, action) {
			const existingItem = state.products.find(
				(product) => product.id === action.payload.id
			);

			if (!existingItem) {
				return;
			}

			if (action.payload.quantity >= 0) {
				existingItem.quantity =
					state.maxValues[action.payload.id] -
					action.payload.quantity;
			} else {
				existingItem.quantity = existingItem.quantity - 1;
			}
			if (existingItem.quantity < 0) {
				existingItem.quantity = 0;
			}
		},
		updateProducts(state, action) {
			state.products = state.products.map((product) => {
				const cartItem = action.payload.items.find(
					(item) => item.id === product.id
				);

				if (cartItem) {
					product = {
						...product,
						quantity: product.quantity - cartItem.quantity,
					};
				}

				return product;
			});
		},
		changeFilterType(state, action) {
			state.filterType = action.payload.filterType;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
