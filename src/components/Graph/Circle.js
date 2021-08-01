import { useRef, useEffect } from 'react';

import classNames from 'classnames';
import classes from './Circle.module.scss';

const Circle = ({ radius, transparent, fill, className }) => {
	const pathLength = radius * (2 * Math.PI).toFixed(1);
	const circleRef = useRef(null);

	if (circleRef) {
		console.log(circleRef.current);
	}

	return (
		<svg className={classes.round}>
			{!transparent && (
				<circle
					ref={circleRef}
					className={classNames(classes.circle, className)}
					cx="50%"
					cy="50%"
					r={radius}
					strokeDasharray={pathLength}
					strokeDashoffset={pathLength - (fill * 1.5)}
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
