import classNames from 'classnames';
import React from 'react';
import getCurrentDate from '../utils/getCurrentDate';

import { TotalCard, Button } from '../components/UI';
import Table from '../components/Table/Table';

import { ReactComponent as DollarIcon } from '../assets/dollar.svg';
import { ReactComponent as BookmarkIcon } from '../assets/bookmark.svg';
import { ReactComponent as PeopleIcon } from '../assets/people.svg';

import classes from './Dashboard.module.scss';
import DashboardCard from '../components/DashboardCard/DashboardCard';
import Graph from '../components/Graph/Graph';

const Dashboard = () => {
	const { date, day, month, year } = getCurrentDate();

	const topOrders = [
		{
			imgUrl: 'https://firebasestorage.googleapis.com/v0/b/resto-5634a.appspot.com/o/Propducts%2Fcard-1.png?alt=media&token=4f9c78d7-7a27-40f6-9867-bcbffa8e418b',
			name: 'Spicy seasoned seafood noodles',
			quantity: 200,
		},
		{
			imgUrl: 'https://firebasestorage.googleapis.com/v0/b/resto-5634a.appspot.com/o/Propducts%2Fcard-1.png?alt=media&token=4f9c78d7-7a27-40f6-9867-bcbffa8e418b',
			name: 'Salted pasta with mushroom sauce',
			quantity: 150,
		},
		{
			imgUrl: 'https://firebasestorage.googleapis.com/v0/b/resto-5634a.appspot.com/o/Propducts%2Fcard-1.png?alt=media&token=4f9c78d7-7a27-40f6-9867-bcbffa8e418b',
			name: 'Beef dumpling in hot and sour soup',
			quantity: 80,
		},
	];

	const topOrdersItems = topOrders.map((order) => {
		return (
			<li key={Math.random().toString()} className={classes['top-item']}>
				<img
					className={classes['top-item__img']}
					src={order.imgUrl}
					alt="Dish"
				/>
				<div className={classes['top-item__info']}>
					<div className={classes['top-item__name']}>
						{order.name}
					</div>
					<div className={classes['top-item__quantity']}>
						{order.quantity} dishes ordered
					</div>
				</div>
			</li>
		);
	});

	return (
		<section className={classes.dashboard}>
			<div className={classes.header}>
				<h2 className={classNames('title', classes.title)}>
					Dashboard
				</h2>
				<p className={classes.date}>
					{day}, {date} {month} {year}
				</p>
			</div>
			<div className={classes.container}>
				<div className={classes['total-cards']}>
					<TotalCard
						className={classNames(
							classes['money-card'],
							classes['total-card']
						)}
						percent={32.4}
						descr={'Total Revenue'}
						value={'$10,243.00'}
						icon={<DollarIcon />}
					/>
					<TotalCard
						className={classNames(
							classes['order-card'],
							classes['total-card']
						)}
						percent={-12.4}
						descr={'Total Dish Ordered'}
						value={'23,456'}
						icon={<BookmarkIcon />}
					/>
					<TotalCard
						className={classNames(
							classes['customer-card'],
							classes['total-card']
						)}
						percent={2.4}
						descr={'Total Customer'}
						value={'1, 234'}
						icon={<PeopleIcon />}
					/>
				</div>
				<Table className={classes.table} items={[{ name: 'name' }]} />
			</div>
			<div className={classes.aside}>
				<DashboardCard
					className={classes['most-ordered']}
					title={'Most Ordered'}
				>
					<ul className={classes['top-list']}>{topOrdersItems}</ul>
					<Button wide outline hover>
						View All
					</Button>
				</DashboardCard>
				<DashboardCard
					className={classNames(
						classes['most-ordered'],
						classes['most-ordered-type']
					)}
					title={'Most Ordered of Type'}
				>
					<Graph />
				</DashboardCard>
			</div>
		</section>
	);
};

export default Dashboard;
