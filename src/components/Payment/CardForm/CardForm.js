import classNames from 'classnames';
import classes from './CardForm.module.scss';
import Input from '../../UI/Input/Input';

const CardForm = () => {
	return (
		<div className={classes['card-form']}>
			<Input
				className={classNames(classes.input)}
				id="cardName"
				placeholder="Enter name"
				title={'Cardholder Name'}
			/>
			<Input
				className={classNames(classes.input)}
				id="cardNumber"
				type="number"
				placeholder="Enter Card Number"
				title={'Card Number'}
			/>
			<Input
				className={classNames(classes.input, classes.short)}
				id="expirationDate"
				type="number"
				placeholder="Enter Expiration date"
				title={'Expiration Date'}
				short
			/>
			<Input
				className={classNames(classes.input, classes.short)}
				id="cvv"
				placeholder="Enter CVV number"
				type="password"
				title={'CVV'}
				short
			/>
		</div>
	);
};

export default CardForm;
