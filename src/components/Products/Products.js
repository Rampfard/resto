import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from './Product/ProductCard';
import { ReactComponent as Loading } from '../../assets/loading.svg';

import { productsActions } from '../../store/products-slice';
import { fetchProductData } from '../../store/product-actions';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

import classes from './Products.module.scss';

const Products = ({ filterType }) => {
	const dispatch = useDispatch();

	const [clickedItemId, setClickedItemId] = useState(null);

	const { status, error } = useSelector((state) => state.ui.requestStatus);
	const { items: cartItems } = useSelector((state) => state.cart);
	const { products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProductData(filterType));

		return () => setClickedItemId(null);
	}, [filterType, dispatch]);

	useEffect(() => {
		if (status === 'completed') {
			dispatch(productsActions.updateProducts({ items: cartItems }));
		}
	}, [status, dispatch]);

	const toggleActiveClassHandler = (e, id) => {
		if (e.target.nodeName !== 'BUTTON') {
			setClickedItemId(id);
		}

		if (id === clickedItemId && e.target.nodeName !== 'BUTTON') {
			setClickedItemId(null);
		}
	};

	const addItemHandler = (item) => {
		if (item.quantity === 0) {
			return;
		}

		dispatch(cartActions.addProduct({ ...item, maxQuantity: item.quantity }));

		dispatch(productsActions.updateProduct({ id: item.id }));

		dispatch(
			uiActions.setNotification({
				message: 'Item added to cart!',
				type: 'success',
			})
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
		return (
			<ProductCard
				key={id}
				activeClass={clickedItemId === id ? 'active' : null}
				id={id}
				title={name}
				price={price}
				img={imgUrl}
				quantity={quantity}
				type={type}
				onToggle={toggleActiveClassHandler}
				onAdd={addItemHandler}
			/>
		);
	});

	return <ul className={classes.products}>{content}</ul>;
};

export default Products;
