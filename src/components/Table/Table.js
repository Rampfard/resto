import classNames from 'classnames';
import useHttp from '../../hooks/use-http';
import { getAllOrders } from '../../api/api';

import Dropdown from '../Dropdown/Dropdown';
import TableItem from './TableItem/TableItem';
import { Loading } from '../UI';
import { ReactComponent as FilterIcon } from '../../assets/filter-settings.svg';

import classes from './Table.module.scss';
import { useEffect, useState } from 'react';

const Table = ({ className }) => {
	const dropdownOptions = [
		{ name: 'All' },
		{ name: 'Completed' },
		{ name: 'Pending' },
		{ name: 'Preparing' },
	];

	const {
		sendRequest: getOrders,
		data: items,
		status,
		error,
	} = useHttp(getAllOrders, true);

	const [filterType, setFilterType] = useState('All');

	useEffect(() => {
		getOrders();
	}, [getOrders]);

	const createItems = (items) => {
		return items.map((item) => {
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
	};

	let orders;

	if (status === 'pending' && !error) {
		orders = <Loading />;
	}

	if (items && items.length < 1) {
		orders = <div className="centered">No orders</div>;
	}

	if (status === 'completed' && !error && items.length > 0) {
		if (filterType !== 'All') {
			const sortOrders = items.filter(
				(item) => item.status === filterType.toLowerCase()
			);
			orders = createItems(sortOrders);
		} else {
			orders = createItems(items);
		}
	}

	const filterOrdersHandler = (e) => {
		setFilterType(e.target.textContent);
	};

	return (
		<div className={classNames(classes.table, className)}>
			<div className={classes.header}>
				<div className={classes.info}>
					<h3 className={classNames('title')}>Order Report</h3>
					<Dropdown
						icon={<FilterIcon />}
						onChange={filterOrdersHandler}
						options={dropdownOptions}
					/>
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
