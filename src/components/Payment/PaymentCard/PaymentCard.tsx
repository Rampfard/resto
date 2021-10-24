import { PaymentMethod } from '$types/index';
import classNames from 'classnames';
import { FC } from 'react';
import classes from './PaymentCard.module.scss';

interface PaymentCardProps {
	id: PaymentMethod;
	title: string;
	className: string;
	checked?: boolean;
	icon?: JSX.Element;
	onChange: (id: PaymentMethod) => void;
}

const PaymentCard: FC<PaymentCardProps> = (props) => {
	const { id, title, icon, className, checked, onChange } = props;

	return (
		<div className={classNames(classes['payment-card'], className)}>
			<input
				id={id}
				name="method"
				type="radio"
				onChange={(e) => onChange(id)}
				checked={checked}
			/>
			<label htmlFor={id}>
				{icon ? icon : null}
				<p className={classes.name}>{title}</p>
				<span>
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M9.8635 5.40362L6.81816 9.40362C6.69283 9.56828 6.49883 9.66562 6.29216 9.66695H6.2875C6.08283 9.66695 5.8895 9.57228 5.76283 9.41095L4.1415 7.33962C3.91483 7.05028 3.9655 6.63095 4.2555 6.40428C4.54483 6.17695 4.96483 6.22762 5.1915 6.51828L6.28016 7.90895L8.80283 4.59628C9.0255 4.30362 9.4435 4.24628 9.7375 4.46962C10.0302 4.69295 10.0868 5.11095 9.8635 5.40362ZM7.00016 0.333618C3.31816 0.333618 0.333496 3.31828 0.333496 7.00028C0.333496 10.6816 3.31816 13.667 7.00016 13.667C10.6822 13.667 13.6668 10.6816 13.6668 7.00028C13.6668 3.31828 10.6822 0.333618 7.00016 0.333618Z"
						></path>
					</svg>
				</span>
			</label>
		</div>
	);
};

export default PaymentCard;
