import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import useOutsideClick from '../../hooks/use-outside-click';

import { Button, ToggleButton } from '../UI';
import CartItem from './CartItem';

import { changeOrderVisibility } from '../../store/ui-slice';
import { paymentActions } from '../../store/payment-slice';

import classes from './Cart.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';

const Cart = () => {
	const dispatch = useDispatch();
	const cartRef = useRef(null);

	const {
		cart: { items, totalPrice },
		payment: { deliveryMethod },
		ui: { deliveryMethods, isCartVisible, isPaymentVisible },
	} = useAppSelector((state) => state);

	const closeCartHandler = () => {
		if (isCartVisible && !isPaymentVisible) {
			dispatch(
				changeOrderVisibility({
					isCartVisible: false,
					isPaymentVisible: false,
				})
			);
		}
	};

	useOutsideClick(cartRef, closeCartHandler);

	const toggleCartHandler = () => {
		dispatch(
			changeOrderVisibility({
				isCartVisible: !isCartVisible,
				isPaymentVisible: false,
			})
		);
	};

	const showPaymentHandler = () => {
		dispatch(
			changeOrderVisibility({
				isCartVisible: true,
				isPaymentVisible: true,
			})
		);
	};

	// change any
	const changeDeliveryMethodHandler = (e: any) => {
		dispatch(
			paymentActions.changeDeliveyMethod({
				deliveryMethod: e.target.innerText,
			})
		);
	};

	const visibleClass = isCartVisible ? classes.shown : null;

	const activeClass = isCartVisible && isPaymentVisible ? classes.active : null;

	const cartItems = items.map((item) => {
		const { name, id, price, quantity, totalPrice, img_src, maxQuantity } =
			item;

		return (
			<CartItem
				key={id}
				id={id}
				title={name}
				price={price}
				quantity={quantity}
				totalPrice={totalPrice}
				img_src={img_src}
				maxQuantity={maxQuantity}
			/>
		);
	});

	const selectors = deliveryMethods.map((selector) => {
		return (
			<Button
				key={selector.name}
				highlighted={selector.name === deliveryMethod}
				className={classes.selector}
				onClick={changeDeliveryMethodHandler}
			>
				{selector.name}
			</Button>
		);
	});

	let headerContent = (
		<>
			<p className={classNames('block-title', classes.title)}>Order #34324</p>
			<div className={classes.selectors}>{selectors}</div>
			<div className={classes.names}>
				<p className={classes.name}>Item</p>
				<p className={classes.name}>Qty</p>
				<p className={classes.name}>Price</p>
			</div>
		</>
	);

	if (isPaymentVisible) {
		headerContent = (
			<>
				<h2 className={classNames('title', classes.title)}>Confirmation</h2>
				<h3 className={classes.subtitle}>Orders #34562</h3>
			</>
		);
	}

	const discount = 0;

	return (
		<div
			ref={cartRef}
			className={classNames(classes.cart, activeClass, visibleClass)}
		>
			<ToggleButton onClick={toggleCartHandler}>My Order</ToggleButton>
			<div className={classes.container}>
				<div className={classes.header}>{headerContent}</div>
				<ul className={classes.products}>{cartItems}</ul>
			</div>
			<div className={classes['total-container']}>
				<div className={classes.total}>
					<p className={classes['total-title']}>Discount</p>
					<p className={classes['total-price']}>$ {discount.toFixed(2)}</p>
				</div>
				<div className={classes.total}>
					<p className={classes['total-title']}>Sub Total</p>
					<p className={classes['total-price']}>$ {totalPrice.toFixed(2)}</p>
				</div>
			</div>

			{!isPaymentVisible && (
				<Button
					className={classes.btn}
					highlighted
					onClick={showPaymentHandler}
					disabled={totalPrice <= 0}
				>
					Continue to Payment
				</Button>
			)}
		</div>
	);
};

export default Cart;