import classNames from 'classnames';
import classes from './Tab.module.scss';

const Tab = ({ activeId, children, id, onClick }) => {
	const active = activeId === id ? classes.active : null;

	return (
		<li
			id={id}
			onClick={() => onClick(id)}
			className={classNames(classes.tab, active)}
		>
			{children}
		</li>
	);
};

export default Tab;
