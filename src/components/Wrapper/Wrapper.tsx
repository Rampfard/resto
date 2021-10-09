import classNames from 'classnames';
import { FC } from 'react';
import classes from './Wrapper.module.scss';

interface WrapperProps {
	className?: string;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
	return (
		<div className={classNames(classes.wrapper, className)}>{children}</div>
	);
};

export default Wrapper;
