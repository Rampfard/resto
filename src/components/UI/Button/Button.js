import classes from './Button.module.scss';
import classNames from 'classnames';

const Button = ({
	type,
	className,
	children,
	highlighted,
	onClick,
	disabled,
	hover,
	outline,
	wide,
}) => {
	const activeClass = highlighted ? classes.active : null;
	const activeHover = hover ? classes.hover : null;
	const activeOutline = outline ? classes.outline : null;
	const activeWide = wide ? classes.wide : null;

	return (
		<button
			onClick={onClick}
			className={classNames(
				classes.btn,
				className,
				activeClass,
				activeHover,
				activeOutline,
				activeWide
			)}
			type={type ? type : 'button'}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
