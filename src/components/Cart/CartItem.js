import { useDispatch } from 'react-redux';

import { Input, NumberInput, Button } from '../UI';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

import { cartActions } from '../../store/cart-slice';
import { productsActions } from '../../store/products-slice';

import classes from './CartItem.module.scss';

const CartItem = (props) => {
	const { id, title, price, quantity, totalPrice, imgUrl, maxQuantity } = props;

	const dispatch = useDispatch();

	const quantityChangeHandler = (e) => {
		if (+e.target.value > +e.target.getAttribute('max')) {
			return;
		}

		dispatch(
			cartActions.updateItemQuantity({
				id,
				quantity: +e.target.value
			})
		);

		dispatch(
			productsActions.updateProduct({
				id,
				quantity: +e.target.value,
			})
		);
	};

	const removeItemHandler = () => {
		dispatch(
			cartActions.removeItem({
				id,
			})
		);

		dispatch(
			productsActions.updateProduct({
				id,
				quantity: 0,
			})
		);
	};

	return (
		<li id={id} className={classes['cart-item']}>
			<div className={classes['left']}>
				<div className={classes.inner}>
					<div className={classes.info}>
						<img src={imgUrl} alt={title} />
						<h3 className={classes.title}>{title}</h3>
						<small className={classes.price}>$ {price}</small>
					</div>
					<NumberInput
						className={classes.quantity}
						value={quantity}
						max={maxQuantity}
						min={1}
						onChange={quantityChangeHandler}
					/>
				</div>
				<Input
					className={classes.notice}
					type="text"
					placeholder="Order Note..."
				/>
			</div>
			<div className={classes['right']}>
				<p className={classes.total}>$ {totalPrice.toFixed(2)}</p>
				<Button className={classes['delete-btn']} onClick={removeItemHandler}>
					<DeleteIcon />
				</Button>
			</div>
		</li>
	);
};

export default CartItem;
