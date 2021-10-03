import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import Tab from './Tab';
import classes from './Tabs.module.scss';

interface TabsProps {
	className?: string;
	tabs?: { type: string; name: string }[];
	onTabChange: (type: string) => void;
	initialActiveTab?: string;
}

const Tabs: FC<TabsProps> = ({
	className,
	onTabChange,
	initialActiveTab,
	tabs = [{ name: 'Tab', type: 'tab' }],
}) => {
	const [activeTabType, setActiveTabType] = useState(
		initialActiveTab ? initialActiveTab : tabs[0].type
	);

	const tabChangeHandler = (type: string) => {
		setActiveTabType(type);
		onTabChange(type);
	};

	return (
		<div className={classNames(classes.tabs, className)}>
			<ul className={classes.container}>
				{tabs.map((tab) => (
					<Tab
						id={tab.type}
						key={tab.type}
						onClick={tabChangeHandler}
						activeId={activeTabType}
					>
						{tab.name}
					</Tab>
				))}
			</ul>
		</div>
	);
};

export default Tabs;
