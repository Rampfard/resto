import { useState, useEffect } from 'react';
import classNames from 'classnames';
import classes from './Tabs.module.scss';
import Tab from './Tab';

const Tabs = ({ className, onTabChange, initialActiveTab }) => {
	const [clickedItemId, setClickedItemId] = useState(initialActiveTab);

	useEffect(() => {
		onTabChange(clickedItemId);
	}, [clickedItemId, onTabChange]);

	const toggleActiveClassHandler = (id) => {
		setClickedItemId(id);
	};

	return (
		<div className={classNames(classes.tabs, className)}>
			<ul className={classes.container}>
				<Tab
					id="hot"
					onClick={toggleActiveClassHandler}
					activeId={clickedItemId}
				>
					Hot Dishes
				</Tab>
				<Tab
					id="cold"
					onClick={toggleActiveClassHandler}
					activeId={clickedItemId}
				>
					Cold Dishes
				</Tab>
				<Tab
					id="soup"
					onClick={toggleActiveClassHandler}
					activeId={clickedItemId}
				>
					Soup
				</Tab>
				<Tab
					id="grill"
					onClick={toggleActiveClassHandler}
					activeId={clickedItemId}
				>
					Grill
				</Tab>
				<Tab
					id="appetizer"
					onClick={toggleActiveClassHandler}
					activeId={clickedItemId}
				>
					Appetizer
				</Tab>
				<Tab
					id="dessert"
					onClick={toggleActiveClassHandler}
					activeId={clickedItemId}
				>
					Dessert
				</Tab>
			</ul>
		</div>
	);
};

export default Tabs;
