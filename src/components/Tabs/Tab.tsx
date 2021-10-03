import { FC } from 'react';
import classes from './Tab.module.scss';

interface TabProps {
	activeId: string;
	id: string;
	onClick: (id: string) => void;
}

const Tab: FC<TabProps> = ({ activeId, children, id, onClick }) => {
	return (
		<li
			id={id}
			onClick={() => onClick(id)}
			className={`${classes.tab} ${activeId === id ? classes.active : ''}`}
		>
			{children}
		</li>
	);
};

export default Tab;
