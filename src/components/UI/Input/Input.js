import classNames from 'classnames';
import classes from './Input.module.scss';

const Input = (props) => {
	const {
		id,
		icon,
		placeholder,
		title,
		type,
		required,
		short,
		className,
		onChange,
	} = props;

	return (
		<div
			className={classNames(
				classes['form-control'],
				className,
				short && classes.short
			)}
		>
			<label htmlFor={id} className={icon && classes.icon}>
				{icon && <img src={icon} alt="" />}
				{title ? title : ''}
			</label>
			<input
				id={id}
				type={type ? type : 'text'}
				placeholder={placeholder ? placeholder : null}
				required={required ? true : null}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
