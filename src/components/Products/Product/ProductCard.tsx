import classNames from 'classnames';
import classes from './ProductCard.module.scss';
import Button from '../../UI/Button/Button';
import { FC } from 'react';
import { IProduct } from '$types/index';

type AddFn = (
	item: Omit<IProduct, 'maxQuantity' | 'totalPrice' | 'art'>
) => void;
interface PropductProps {
	type: string;
	id: string;
	img_src: string;
	name: string;
	activeClass?: string | null;
	price: number;
	quantity: number;
	onToggle: (id: string) => void;
	onAdd: AddFn;
}

const Product: FC<PropductProps> = (props) => {
	const {
		type,
		id,
		img_src,
		name,
		price,
		quantity,
		onToggle,
		activeClass,
		onAdd,
	} = props;

	const active = activeClass && classes.active;

	return (
		<li
			id={id}
			className={classNames(classes.product, active)}
			data-type={type}
			onClick={() => onToggle(id)}
		>
			<img src={img_src} alt={name} />
			<h3 className={classNames(classes.title)}>{name}</h3>
			<p className={classNames(classes.price)}>$ {price.toFixed(2)}</p>
			<div className={classNames(classes.quantity)}>
				<span>{quantity}</span> Bowls available
			</div>
			{active && (
				<Button
					onClick={(e) => {
						e.stopPropagation();

						onAdd({
							type,
							id,
							img_src,
							name,
							price,
							quantity,
						});
					}}
					className={classNames(classes['product-btn'])}
					disabled={quantity === 0}
				>
					Add to order
				</Button>
			)}
		</li>
	);
};

export default Product;
