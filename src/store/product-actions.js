import { productsActions } from './products-slice';
import { uiActions } from './ui-slice';

export const fetchProductData = (type) => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				`https://resto-5634a-default-rtdb.europe-west1.firebasedatabase.app/products/dishes/${type}.json`
			);

			if (!response.ok) {
				throw new Error('Could not fetch cart  data!');
			}

			const data = await response.json();

			return data;
		};

		try {
			dispatch(
				uiActions.setRequestStatus({
					status: 'pending',
					error: null,
				})
			);

			const products = await fetchData();

			dispatch(
				productsActions.replaceProducts({
					products: products || [],
				})
			);

			dispatch(
				uiActions.setRequestStatus({
					status: 'completed',
					error: null,
				})
			);
		} catch (e) {
			dispatch(
				uiActions.setRequestStatus({
					status: 'error',
					error: e.message || 'Somthing went wrong!',
				})
			);
		}
	};
};
