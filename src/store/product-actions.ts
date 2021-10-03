import { Dispatch } from 'redux';
import { replaceProducts } from './products-slice';
import { setRequestStatus } from './ui-slice';

export const fetchProductData = (type: string) => {
	return async (dispatch: Dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://resto-5634a-default-rtdb.europe-west1.firebasedatabase.app/products/dishes${
					type ? `/${type}` : ''
				}.json`
			);

			if (!response.ok) {
				throw new Error('Could not fetch cart  data!');
			}

			const data = await response.json();

			return data;
		};

		try {
			dispatch(
				setRequestStatus({
					status: 'pending',
					error: null,
				})
			);

			const products = await fetchData();

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
