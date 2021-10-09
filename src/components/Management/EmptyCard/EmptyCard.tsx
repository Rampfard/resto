import { FC } from 'react';
import classes from './EmptyCard.module.scss';

type AddFn = (
	item: Omit<IProduct, 'maxQuantity' | 'totalPrice' | 'art'>
) => void;

interface EmptyCardProps {
	onAdd: () => void;
}

const EmptyCard: FC<EmptyCardProps> = ({ onAdd }) => {
	return (
		<li className={classes['card-empty']} onClick={onAdd}>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 1.5V9M9 16.5V9M9 9H16.5M9 9H1.5"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
			<p>Add new dish</p>
		</li>
	);
};

export default EmptyCard;
