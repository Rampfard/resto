import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Backdrop } from '../components/UI';
import Dropdown from '../components/Dropdown/Dropdown';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Tabs from '../components/Tabs/Tabs';
import Notification from '../components/UI/Notification/Notification';

import { productsActions } from '../store/products-slice';
import { uiActions } from '../store/ui-slice';

import classes from './Home.module.scss';

const Home = () => {
	const dropdownOptions = [
		{ name: 'Dine In' },
		{ name: 'Delivery' },
		{ name: 'To Go' },
	];

	const dispatch = useDispatch();

	const { notification, isCartVisible } = useSelector((state) => state.ui);
	const [filterType, setFilterType] = useState('hot');

	useEffect(() => {
		let timerId;
		if (notification.message) {
			timerId = setTimeout(() => {
				dispatch(
					uiActions.setNotification({
						notification: null,
					})
				);
			}, 2000);
		}

		return () => clearTimeout(timerId);
	}, [dispatch, notification.message]);

	const filterProductsHandler = (type) => {
		dispatch(productsActions.changeFilterType({ filterType: type }));
		setFilterType(type);
	};

	const filterByDeliveryHandler = (e) => {};

	return (
		<>
			<section className={classes.home}>
				<div className={classes.container}>
					<Header />
					<Tabs
						className={classes['home-tabs']}
						onTabChange={filterProductsHandler}
						initialActiveTab={filterType}
					/>
					<div className={classes.choice}>
						<p className={classNames('block-title', classes.title)}>
							Choose Dishes
						</p>
						<Dropdown
							options={dropdownOptions}
							onChange={filterByDeliveryHandler}
						/>
					</div>
					<Products filterType={filterType} />
				</div>
			</section>
			{notification.message && (
				<Notification type={notification.type}>
					{notification.message}
				</Notification>
			)}
			{isCartVisible && <Backdrop />}
		</>
	);
};

export default Home;
