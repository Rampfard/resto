import classNames from 'classnames';
import classes from './CashForm.module.scss';
import Input from '../../UI/Input/Input';

const CashForm = () => {
	return (
		<div className={classes['card-form']}>
			<Input
				className={classNames(classes.input)}
				id="name"
				placeholder="Enter your name"
				title="Your name"
			/>
			<Input
				className={classNames(classes.input)}
				id="phone"
				type="phone"
				placeholder="Enter phone number"
				title="Phone Number"
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

export default CashForm;
