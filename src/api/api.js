const FIREBASE_DOMAIN =
	'https://resto-5634a-default-rtdb.europe-west1.firebasedatabase.app';

export const getAllProducts = async () => {
	const response = await fetch(`${FIREBASE_DOMAIN}/products/dishes.json`);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch data.');
	}

	const transformedItems = [];

	for (const category of data) {
		transformedItems.push(...data[category]);
	}
	return transformedItems;
};

export const getFilteredProducts = async (filterType) => {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/products/dishes/${filterType}.json`
	);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch data.');
	}

	return data || [];
};

export const getAllOrders = async () => {
	const response = await fetch(`${FIREBASE_DOMAIN}/orders.json`);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Could not fetch data.');
	}

	return data;
};
