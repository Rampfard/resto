import classNames from 'classnames';
import {
	DetailedHTMLProps,
	FC,
	FormEvent,
	InputHTMLAttributes,
	useState,
} from 'react';
import classes from './Input.module.scss';

interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	title?: string;
	icon?: string;
	className?: string;
	short?: boolean;
	onUserInput?: (e: FormEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
	const [value, setValue] = useState('');

	const {
		id,
		icon,
		title,
		type,
		short,
		className,
		onUserInput,
		...attributes
	} = props;

	const userInputHandler = (e: FormEvent<HTMLInputElement>) => {
		if (onUserInput) {
			onUserInput(e);
		}

		setValue(e.currentTarget.value);
	};

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
				value={value}
				onChange={userInputHandler}
				{...attributes}
			/>
		</div>
	);
};

export default Input;
