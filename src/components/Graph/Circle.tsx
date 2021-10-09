import { FC, useRef } from 'react';

import classNames from 'classnames';
import classes from './Circle.module.scss';
// import { getNumberRange } from '../../utils/getNumberRange';

interface CircleProps {
	radius: number;
	fill?: number;
	className?: string;
	transparent?: boolean;
}

const Circle: FC<CircleProps> = ({ radius, transparent, fill, className }) => {
	const pathLength = radius * +(2 * Math.PI).toFixed(1);

	// const targetNumber = getNumberRange(fill ? fill : 0, 0, 100, 0, pathLength);

	console.log(pathLength);
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
					// strokeDashoffset={targetNumber}
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
