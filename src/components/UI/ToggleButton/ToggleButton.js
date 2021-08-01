import classNames from 'classnames';
import classes from './ToggleButton.module.scss';

const ToggleButton = ({ className, children, onClick }) => {
	return (
		<button
			className={classNames(className, classes.btn)}
			onClick={onClick}
		>
			<span>{children}</span>
		</button>
	);
};

export default ToggleButton;
