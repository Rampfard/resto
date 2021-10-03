import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IProductState {
	products: IProduct[];
}

const initialState: IProductState = {
	products: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		replaceProducts(state, action: PayloadAction<{ products: IProduct[] }>) {
			state.products = action.payload.products;
		},
	},
});

export const { replaceProducts } = productsSlice.actions;

export default productsSlice.reducer;
