import classNames from 'classnames';
import classes from './Card.module.scss';

interface CardProps {
	className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
	return <div className={classNames(classes.card, className)}>{children}</div>;
};

export default Card;
