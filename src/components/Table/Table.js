import classNames from 'classnames';
import useHttp from '../../hooks/use-http';
import { getAllOrders } from '../../api/api';

import Dropdown from '../Dropdown/Dropdown';
import TableItem from './TableItem/TableItem';
import { Loading } from '../UI';
import { ReactComponent as FilterIcon } from '../../assets/filter-settings.svg';

import classes from './Table.module.scss';
import { useEffect } from 'react';

const Table = ({ className }) => {
	const {
		sendRequest: getOrders,
		data: items,
		status,
		error,
	} = useHttp(getAllOrders, true);

	useEffect(() => {
		getOrders();
	}, [getOrders]);

	let orders;

	if (status === 'pending' && !error) {
		orders = <Loading />;
	}

	if (items && items.length < 1) {
		orders = <div className="centered">No orders</div>;
	}

	if (status === 'completed' && !error && items) {
		orders = items.map((item) => {
			return (
				<TableItem
					key={item.id}
					name={item.name}
					menu={item.menu}
					status={item.status}
					totalPayment={item.total}
					avatarUrl={item.avatar_url}
				/>
			);
		});
	}

	return (
		<div className={classNames(classes.table, className)}>
			<div className={classes.header}>
				<div className={classes.info}>
					<h3 className={classNames('title')}>Order Report</h3>
					<Dropdown icon={<FilterIcon />} />
				</div>
				<div className={classes.titles}>
					<p className={classes.name}>Customer</p>
					<p className={classes.name}>Menu</p>
					<p className={classes.name}>Total Payment</p>
					<p className={classes.name}>Status</p>
				</div>
			</div>
			<div className={classes['table-body']}>
				<ul className={classes.list}>{orders}</ul>
			</div>
		</div>
	);
};

export default Table;
