import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import PaymentCard from './PaymentCard/PaymentCard';
import Dropdown from '../Dropdown/Dropdown';
import CardForm from './CardForm/CardForm';
import { Input, Button } from '../UI';
import { ReactComponent as CreditCardIcon } from '../../assets/creditcard.svg';
import { ReactComponent as PaypalIcon } from '../../assets/paypal.svg';
import { ReactComponent as CashIcon } from '../../assets/cash.svg';

import { changeOrderVisibility } from '../../store/ui-slice';
import { paymentActions } from '../../store/payment-slice';

import classes from './Payment.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';
import { FormEvent } from 'react';

const Payment = () => {
	const dropdownOptions = [
		{ name: 'Dine In' },
		{ name: 'Delivery' },
		{ name: 'To Go' },
	];

	const dispatch = useDispatch();

	const {
		cart: { totalPrice },
		payment: { deliveryMethod },
		ui: { isPaymentVisible },
	} = useAppSelector((state) => state);

	const hidePaymentHandler = () => {
		dispatch(
			changeOrderVisibility({
				isCartVisible: true,
				isPaymentVisible: false,
			})
		);
	};

	const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('submited!');
	};

	const changePaymentMethodHandler = (id: number) => {};

	const changeDeliveryMethodHandler = (e: FormEvent<HTMLButtonElement>) => {
		dispatch(
			paymentActions.changeDeliveyMethod({
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
						id={'credit'}
						title={'Credit Card'}
						onChange={changePaymentMethodHandler}
					>
						<CreditCardIcon />
					</PaymentCard>
					<PaymentCard
						className={classes.method}
						id={'paypal'}
						title={'Paypal'}
						onChange={changePaymentMethodHandler}
					>
						<PaypalIcon />
					</PaymentCard>
					<PaymentCard
						className={classes.method}
						id={'cash'}
						title={'Cash'}
						onChange={changePaymentMethodHandler}
					>
						<CashIcon />
					</PaymentCard>
				</div>
				<CardForm />
				<div className={classes.additional}>
					<div className={classes['delivery-type']}>
						<p className={classes['delivery-title']}>Order Type</p>
						<Dropdown
							highlighted
							className={classes.dropdown}
							options={dropdownOptions}
							onChange={changeDeliveryMethodHandler}
							value={deliveryMethod}
						/>
					</div>
					<Input
						className={classNames(classes.table)}
						id="formTable"
						title="Table no."
						placeholder="Enter Table Number"
						type="number"
						short
					/>
				</div>
				<div className={classes.controls}>
					<Button outline hover onClick={hidePaymentHandler}>
						Cancel
					</Button>
					<Button highlighted hover disabled={totalPrice <= 0}>
						Confirm Payment
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Payment;