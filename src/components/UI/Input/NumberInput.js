import classNames from 'classnames';
import classes from './Input.module.scss';

const Input = (props) => {
	const {
		id,
		title,
		placeholder,
		disabled,
		required,
		className,
		value,
		max,
		min,
		onChange,
	} = props;

	return (
		<div className={classNames(classes['form-control'], className)}>
			<label htmlFor={id}>{title}</label>
			<input
				id={id}
				type="number"
				placeholder={placeholder ? placeholder : null}
				required={required ? true : null}
				disabled={disabled}
				onChange={onChange}
				value={value}
				max={max}
				min={min}
			/>
		</div>
	);
};

export default Input;
