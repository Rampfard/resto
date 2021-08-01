import classNames from 'classnames';
import classes from './ProductCard.module.scss';
import Button from '../../UI/Button/Button';

const Product = (props) => {
	const {
		type,
		id,
		img,
		title,
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
			onClick={(e) => onToggle(e, id)}
		>
			<img src={img} alt={title} />
			<h3 className={classNames(classes.title)}>{title}</h3>
			<p className={classNames(classes.price)}>$ {price.toFixed(2)}</p>
			<div className={classNames(classes.quantity)}>
				<span>{quantity}</span> Bowls available
			</div>
			{active && (
				<Button
					onClick={() =>
						onAdd({
							type,
							id,
							img,
							name: title,
							price,
							quantity,
						})
					}
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
