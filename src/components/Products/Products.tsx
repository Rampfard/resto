import { useState, useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';

import ProductCard from './Product/ProductCard';
import { ReactComponent as Loading } from '../../assets/loading.svg';

import { fetchProductData } from '../../store/product-actions';
import { addProduct } from '../../store/cart-slice';

import classes from './Products.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';
import { showNotification } from '../../utils/showNotification';

interface ProductsProps {
	filterType: string;
}

const Products: FC<ProductsProps> = ({ filterType }) => {
	const dispatch = useDispatch();
	const [clickedItemId, setClickedItemId] = useState<string | null>(null);

	const {
		ui: {
			requestStatus: { status, error },
		},
		cart: { items },
		products: { products },
	} = useAppSelector((state) => state);

	useEffect(() => {
		dispatch(fetchProductData(filterType));

		return () => setClickedItemId(null);
	}, [filterType, dispatch]);

	const toggleActiveClassHandler = (id: string) => {
		setClickedItemId(id);

		if (id === clickedItemId) {
			setClickedItemId(null);
		}
	};

	const addItemHandler = (
		item: Omit<IProduct, 'maxQuantity' | 'totalPrice' | 'art'>
	) => {
		if (item.quantity === 0) {
			return;
		}

		dispatch(addProduct({ ...item }));

		showNotification(
			{
				message: 'Item added to cart!',
				type: 'success',
			},
			dispatch
		);
	};

	if (status === 'pending' && !error) {
		return (
			<div className="loading">
				<Loading />
			</div>
		);
	}

	if (error) {
		return <p className="centered">{error}</p>;
	}

	if (products && products.length < 1) {
		return <div className="centered">No dishes yet</div>;
	}

	const content = products.map((product) => {
		const { name, id, price, quantity, img_src: imgUrl, type } = product;
		const cartItem = items.find((item) => item.id === id);

		return (
			<ProductCard
				key={id}
				activeClass={clickedItemId === id ? 'active' : null}
				id={id}
				name={name}
				price={price}
				img_src={imgUrl}
				quantity={
					cartItem ? cartItem.maxQuantity - cartItem.quantity : quantity
				}
				type={type}
				onToggle={toggleActiveClassHandler}
				onAdd={addItemHandler}
			/>
		);
	});

	return <ul className={classes.products}>{content}</ul>;
};

export default Products;