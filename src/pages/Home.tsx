import { FC, FormEvent, useState } from 'react';
import classNames from 'classnames';
import { useAppSelector } from '../hooks/redux-hooks';

import { Backdrop } from '../components/UI';
import Dropdown from '../components/Dropdown/Dropdown';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';
import Tabs from '../components/Tabs/Tabs';
import Notification from '../components/UI/Notification/Notification';

import classes from './Home.module.scss';

const Home: FC = () => {
	const tabs = [
		{ type: 'hot', name: 'Hot Dishes' },
		{ type: 'cold', name: 'Cold Dishes' },
		{ type: 'soup', name: 'Soup' },
		{ type: 'grill', name: 'Grill' },
		{ type: 'appetizer', name: 'Appetizer' },
		{ type: 'dessert', name: 'Dessert' },
	];

	const { notification, isCartVisible, deliveryMethods } = useAppSelector(
		(state) => state.ui
	);
	const [productsType, setPropductsType] = useState('hot');

	const filterProductsHandler = (type: string) => {
		setPropductsType(type);
	};

	const filterByDeliveryHandler = (e: FormEvent<HTMLButtonElement>) => {};

	return (
		<>
			<section className={classes.home}>
				<div className={classes.container}>
					<Header />
					<Tabs
						className={classes['home-tabs']}
						onTabChange={filterProductsHandler}
						initialActiveTab={productsType}
						tabs={tabs}
					/>
					<div className={classes.choice}>
						<p className={classNames('block-title', classes.title)}>
							Choose Dishes
						</p>
						<Dropdown
							options={deliveryMethods}
							onChange={filterByDeliveryHandler}
						/>
					</div>
					<Products filterType={productsType} />
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
