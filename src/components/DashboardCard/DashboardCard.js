import React from 'react';
import classNames from 'classnames';

import Dropdown from '../Dropdown/Dropdown';
import classes from './DashboardCard.module.scss';

const DashboardCard = ({ title, children, className }) => {
	const dropdownOptions = [
		{ name: 'Today' },
		{ name: 'Yeaterday' },
		{ name: 'Week' },
	];

	return (
		<div className={classNames(classes.card, className)}>
			<div className={classes.header}>
				<h3 className={classNames('title', classes.title)}>{title}</h3>
				<Dropdown highlighted options={dropdownOptions} />
			</div>
			<div className={classes.content}>{children}</div>
		</div>
	);
};

export default DashboardCard;
