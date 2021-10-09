import classNames from 'classnames';
import { FC } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { Card } from '../UI';
import classes from './DashboardCard.module.scss';

interface DashboardCardProps {
	title: string;
	className?: string;
}

const DashboardCard: FC<DashboardCardProps> = ({
	title,
	children,
	className,
}) => {
	const dropdownOptions = [
		{ name: 'Today' },
		{ name: 'Yeaterday' },
		{ name: 'Week' },
	];

	const dropdownChangeHandler = () => {
		console.log('dsdsadsa');
	};

	return (
		<Card className={classNames(classes.card, className)}>
			<div className={classes.header}>
				<h3 className={classNames('title', classes.title)}>{title}</h3>
				<Dropdown
					highlighted
					options={dropdownOptions}
					onChange={dropdownChangeHandler}
				/>
			</div>
			<div className={classes.content}>{children}</div>
		</Card>
	);
};

export default DashboardCard;
