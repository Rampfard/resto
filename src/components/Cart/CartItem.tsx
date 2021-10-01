import { useDispatch } from 'react-redux';

import { Input, Button } from '../UI';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

import { cartActions } from '../../store/cart-slice';
import { productsActions } from '../../store/products-slice';

import classes from './CartItem.module.scss';
import { FC, FormEvent } from 'react';

interface CartItemProps {
	id: string;
	title: string;
	imgUrl: string;
	price: number;
	quantity: number;
	totalPrice: number;
	maxQuantity: number;
}

const CartItem: FC<CartItemProps> = (props) => {
	const { id, title, price, quantity, totalPrice, imgUrl, maxQuantity } = props;

	const dispatch = useDispatch();

	const quantityChangeHandler = (e: FormEvent<HTMLInputElement>) => {
		if (+e.currentTarget.value > +e.currentTarget.getAttribute('max')!) {
			return;
		}

		dispatch(
			cartActions.updateItemQuantity({
				id,
				quantity: +e.currentTarget.value,
			})
		);

		dispatch(
			productsActions.updateProduct({
				id,
				quantity: +e.currentTarget.value,
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
					<Input
						className={classes.quantity}
						value={quantity}
						type="number"
						max={maxQuantity}
						min={1}
						onUserInput={quantityChangeHandler}
					/>
				</div>
				<Input
					className={classes.notice}
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
