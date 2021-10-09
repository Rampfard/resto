import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux-hooks';
import { fetchProductsByType } from '../../store/product-actions';
import Tabs from '../Tabs/Tabs';
import { Loading } from '../UI';
import classes from './Management.module.scss';
import Wrapper from '../Wrapper/Wrapper';
import WrapperHeader from '../Wrapper/WrapperHeader';
import ManagementCard from './ManagementCard/ManagementCard';
import EmptyCard from './EmptyCard/EmptyCard';

interface ManagementProps {}

const Management: React.FC<ManagementProps> = () => {
	const [activeTab, setActiveTab] = useState('hot');

	const tabs = [
		{ type: 'hot', name: 'Hot Dishes' },
		{ type: 'cold', name: 'Cold Dishes' },
		{ type: 'soup', name: 'Soup' },
		{ type: 'grill', name: 'Grill' },
		{ type: 'appetizer', name: 'Appetizer' },
		{ type: 'dessert', name: 'Dessert' },
	];

	const {
		products: { products },
		ui: {
			requestStatus: { status, error },
		},
	} = useAppSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsByType(activeTab));
	}, [activeTab, dispatch]);

	const cards = products.map((item) => {
		return (
			<ManagementCard
				key={item.id}
				type={item.type}
				id={item.id}
				img_src={item.img_src}
				name={item.name}
				price={item.price}
				quantity={item.quantity}
				onChange={() => console.log('dsa')}
			/>
		);
	});

	let content;

	if (status === 'error' && error) {
		content = <div className="centered">Somthing went wrong...</div>;
	}

	if (status === 'completed') {
		content = cards;
	}

	return (
		<Wrapper className={classes.wrapper}>
			<WrapperHeader title="Products Management">
				<Tabs tabs={tabs} onTabChange={setActiveTab} />
			</WrapperHeader>
			{status === 'pending' && (
				<div className={classes.loading}>
					<Loading />
				</div>
			)}
			<ul className={classes.list}>
				{status === 'completed' && (
					<EmptyCard onAdd={() => console.log('dsa')} />
				)}
				{content}
			</ul>
		</Wrapper>
	);
};

export default Management;
