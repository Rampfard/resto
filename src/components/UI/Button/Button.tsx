import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, FormEvent } from 'react';
import classes from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	highlighted?: boolean;
	hover?: boolean;
	outline?: boolean;
	wide?: boolean;
	onClick?: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
	type,
	className,
	children,
	highlighted,
	onClick,
	hover,
	outline,
	wide,
	...attributes
}) => {
	return (
		<button
			onClick={onClick}
			className={classNames(classes.btn, className, {
				[classes.active]: highlighted,
				[classes.hover]: hover,
				[classes.outline]: outline,
				[classes.wide]: wide,
			})}
			type={type ? type : 'button'}
			{...attributes}
		>
			{children}
		</button>
	);
};

export default Button;
