import { Dispatch } from 'redux';
import { replaceProducts } from './products-slice';
import { setRequestStatus } from './ui-slice';
import { getAllProducts, getFilteredProducts } from '../api/api';

export const fetchProductsByType = (type: string) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(
				setRequestStatus({
					status: 'pending',
					error: null,
				})
			);

			const products = await getFilteredProducts(type);

			dispatch(
				replaceProducts({
					products: products || [],
				})
			);

			dispatch(
				setRequestStatus({
					status: 'completed',
					error: null,
				})
			);
		} catch (e: unknown) {
			if (e instanceof Error) {
				dispatch(
					setRequestStatus({
						status: 'error',
						error: e.message || 'Somthing went wrong!',
					})
				);
			}
		}
	};
};

export const fetchAllProducts = () => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch(
				setRequestStatus({
					status: 'pending',
					error: null,
				})
			);

			const products = await getAllProducts();

			dispatch(
				replaceProducts({
					products: products || [],
				})
			);

			dispatch(
				setRequestStatus({
					status: 'completed',
					error: null,
				})
			);
		} catch (e: unknown) {
			if (e instanceof Error) {
				dispatch(
					setRequestStatus({
						status: 'error',
						error: e.message || 'Somthing went wrong!',
					})
				);
			}
		}
	};
};
