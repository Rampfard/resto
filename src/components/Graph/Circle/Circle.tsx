import classNames from 'classnames';
import { FC } from 'react';
import classes from './Circle.module.scss';

interface CircleProps {
	radius: number;
	fill?: number;
	className?: string;
	transparent?: boolean;
}

const Circle: FC<CircleProps> = ({ radius, transparent, fill, className }) => {
	const pathLength = radius * +(2 * Math.PI).toFixed(1);

	return (
		<svg className={classes.round}>
			{!transparent && (
				<circle
					className={classNames(classes.circle, className)}
					cx="50%"
					cy="50%"
					r={radius}
					strokeDasharray={pathLength}
					strokeDashoffset={pathLength - (fill ? fill : 0) * 1.5}
					strokeWidth="11.4783"
				></circle>
			)}
			<circle
				className={classNames(classes.bg)}
				cx="50%"
				cy="50%"
				r={radius}
				strokeWidth="11.4783"
			></circle>
		</svg>
	);
};

export default Circle;
