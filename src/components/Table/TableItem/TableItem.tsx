import classNames from 'classnames';
import { FC } from 'react';

import classes from './TableItem.module.scss';

interface TableItemProps {
	avatarUrl: string;
	name: string;
	menu: string;
	totalPayment: string | number;
	status: 'pending' | 'preparing' | 'completed';
}

const TableItem: FC<TableItemProps> = ({
	avatarUrl,
	name,
	menu,
	totalPayment,
	status,
}) => {
	let activeClass;

	if (status === 'pending') {
		activeClass = classes.pending;
	}

	if (status === 'preparing') {
		activeClass = classes.preparing;
	}

	if (status === 'completed') {
		activeClass = classes.completed;
	}

	return (
		<li className={classNames(classes['customer-order'], activeClass)}>
			<div className={classes.info}>
				<div className={classes.avatar}>
					<img src={avatarUrl} alt="avatar" />
				</div>

				<h4 className={classes.name}>{name}</h4>
			</div>
			<div className={classes.menu}>{menu}</div>
			<div className={classes.payment}>${totalPayment}</div>
			<div className={classes.status}>{status}</div>
		</li>
	);
};

export default TableItem;
