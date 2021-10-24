import classNames from 'classnames';
import React from 'react';
import classes from './WrapperHeader.module.scss';

interface WrapperHeaderProps {
	title: string;
	className?: string;
}

const WrapperHeader: React.FC<WrapperHeaderProps> = ({
	title,
	children,
	className,
}) => {
	return (
		<div className={classNames(classes.header, className)}>
			<h3 className={classNames('title', classes.title)}>{title}</h3>
			{children}
		</div>
	);
};

export default WrapperHeader;
