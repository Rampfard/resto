import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import PaymentCard from './PaymentCard/PaymentCard';
import Dropdown from '../Dropdown/Dropdown';
import CardForm from './CardForm/CardForm';
import PaypalForm from './PaypalForm/PaypalForm';
import { Input, Button } from '../UI';
import { ReactComponent as CreditCardIcon } from '../../assets/creditcard.svg';
import { ReactComponent as PaypalIcon } from '../../assets/paypal.svg';
import { ReactComponent as CashIcon } from '../../assets/cash.svg';

import { changeOrderVisibility } from '../../store/ui-slice';
import { changeDeliveyMethod } from '../../store/payment-slice';

import classes from './Payment.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';
import { FC, FormEvent, useState } from 'react';
import CashForm from './CashForm/CashForm';

const Payment: FC = () => {
	const dispatch = useDispatch();

	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

	const {
		cart: { totalPrice, items },
		payment: { deliveryMethod },
		ui: { isPaymentVisible, deliveryMethods },
	} = useAppSelector((state) => state);

	const hidePaymentHandler = () => {
		const isTablet = window.matchMedia('(max-width: 968px)').matches;

		dispatch(
			changeOrderVisibility({
				isCartVisible: isTablet ? true : false,
				isPaymentVisible: false,
			})
		);
	};

	const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const orders = items.map((item) => ({
			id: item.id,
			type: item.type,
			name: item.name,
			quantity: item.quantity,
			totalPrice: item.totalPrice,
		}));

		console.log('submited!', 'orders: ', {
			totalPrice,
			orders,
		});
	};

	const changePaymentMethodHandler = (id: PaymentMethod) => {
		setPaymentMethod(id);
	};

	const changeDeliveryMethodHandler = (e: FormEvent<HTMLButtonElement>) => {
		dispatch(
			changeDeliveyMethod({
				deliveryMethod: e.currentTarget.innerText as DeliveryMethods,
			})
		);
	};

	return (
		<div
			className={classNames(
				classes.payment,
				isPaymentVisible && classes.active
			)}
		>
			<div className={classes.header}>
				<h2 className={classNames('title', classes.title)}>Payment</h2>
				<h3 className={classes.subtitle}>3 payment method available</h3>
			</div>
			<form onSubmit={submitFormHandler}>
				<h3 className={classNames('block-title', classes['method-title'])}>
					Payment Method
				</h3>
				<div className={classes.methods}>
					<PaymentCard
						className={classes.method}
						id={'card'}
						title={'Credit Card'}
						onChange={changePaymentMethodHandler}
						checked={paymentMethod === 'card'}
						icon={<CreditCardIcon />}
					/>
					<PaymentCard
						className={classes.method}
						id={'paypal'}
						title={'Paypal'}
						onChange={changePaymentMethodHandler}
						checked={paymentMethod === 'paypal'}
						icon={<PaypalIcon />}
					/>
					<PaymentCard
						className={classes.method}
						id={'cash'}
						title={'Cash'}
						onChange={changePaymentMethodHandler}
						checked={paymentMethod === 'cash'}
						icon={<CashIcon />}
					/>
				</div>
				{paymentMethod === 'card' && <CardForm />}
				{paymentMethod === 'paypal' && <PaypalForm />}
				{paymentMethod === 'cash' && <CashForm />}
				<div className={classes.additional}>
					<div className={classes['delivery-type']}>
						<p className={classes['delivery-title']}>Order Type</p>
						<Dropdown
							highlighted
							className={
								deliveryMethod === 'To Go' ? classes.short : classes.dropdown
							}
							options={deliveryMethods}
							onChange={changeDeliveryMethodHandler}
							value={deliveryMethod}
							invert
						/>
					</div>
					{deliveryMethod === 'Dine In' && (
						<Input
							className={classNames(classes.table)}
							id="formTable"
							title="Table no."
							placeholder="Enter Table Number"
							type="number"
							short
						/>
					)}
					{deliveryMethod === 'Delivery' && (
						<Input
							className={classNames(classes.table)}
							id="formAddress"
							title="Address"
							placeholder="Enter Address"
							short
						/>
					)}
				</div>
				<div className={classes.controls}>
					<Button outline hover onClick={hidePaymentHandler}>
						Cancel
					</Button>
					<Button
						highlighted
						hover={totalPrice > 0}
						disabled={totalPrice <= 0}
						type="submit"
					>
						Confirm Payment
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Payment;
