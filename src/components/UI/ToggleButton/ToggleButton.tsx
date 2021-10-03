import classNames from 'classnames';
import { FC, FormEvent } from 'react';
import classes from './ToggleButton.module.scss';

interface ToggleButtonProps {
	className?: string;
	onClick?: (e: FormEvent<HTMLButtonElement>) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({
	className,
	children,
	onClick,
}) => {
	return (
		<button className={classNames(className, classes.btn)} onClick={onClick}>
			<span>{children}</span>
		</button>
	);
};

export default ToggleButton;
