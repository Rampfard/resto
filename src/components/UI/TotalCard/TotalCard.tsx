import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import classes from './TotalCard.module.scss';
import { Card } from '..';

interface TotalCardProps {
	className: string;
	value: string;
	percent: number;
	descr: string;
	icon: ReactNode;
}

const TotalCard: FC<TotalCardProps> = ({
	className,
	value,
	percent,
	descr,
	icon,
}) => {
	const activeClass =
		percent > 0 ? classes['percent-up'] : classes['percent-down'];

	return (
		<Card className={classNames(classes['total-card'], className)}>
			<div className={classes.status}>
				<span className={classes.icon}>{icon}</span>
				<div className={classNames(classes.percent, activeClass)}>
					{percent > 0 ? '+' : null} {percent.toFixed(2)}%
					<span>
						<svg
							width="10"
							height="12"
							viewBox="0 0 10 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M4.99994 11.25C4.75473 11.25 4.55208 11.0704 4.52 10.8375L4.51558 10.7727L4.51583 2.38275L1.45258 5.4139C1.26384 5.60069 0.957161 5.60134 0.767603 5.41535C0.595277 5.24628 0.579064 4.98116 0.719347 4.79402L0.766128 4.74039L4.65645 0.89039L4.66665 0.880955C4.67711 0.871179 4.68801 0.861857 4.69932 0.853024L4.65645 0.89039C4.67519 0.871841 4.6951 0.855129 4.71594 0.840253C4.72903 0.83126 4.74262 0.822533 4.75666 0.814481C4.7879 0.796293 4.82059 0.782199 4.85421 0.771802C4.86606 0.768299 4.87816 0.765043 4.89044 0.762247C4.89982 0.759973 4.90934 0.758102 4.91891 0.756517C4.92928 0.754931 4.93965 0.753548 4.95012 0.752494C4.96063 0.751299 4.97138 0.750566 4.98213 0.750184C4.98809 0.750105 4.994 0.75 4.99994 0.75L5.01602 0.750143C5.02795 0.750537 5.03986 0.751364 5.05174 0.752622L4.99994 0.75C5.02759 0.75 5.05471 0.752285 5.0811 0.756673C5.09313 0.758634 5.1052 0.761117 5.11719 0.764057C5.12671 0.766415 5.13606 0.769008 5.14529 0.771866C5.15626 0.775239 5.16731 0.779094 5.17823 0.783356C5.18951 0.787781 5.20053 0.792567 5.21133 0.797737C5.2196 0.801655 5.22812 0.806039 5.23653 0.810691C5.25231 0.819464 5.26712 0.828751 5.28135 0.838778C5.28358 0.840356 5.28604 0.842124 5.28848 0.843918C5.3101 0.859836 5.32917 0.876334 5.34683 0.894192L9.23384 4.74036C9.4226 4.92713 9.42197 5.22933 9.23243 5.41533C9.06011 5.58442 8.791 5.59927 8.60168 5.46025L8.54745 5.41393L5.48475 2.38333L5.48429 10.7727C5.48429 11.0363 5.26744 11.25 4.99994 11.25Z"></path>
						</svg>
					</span>
				</div>
			</div>
			<p className={classes.value}>{value}</p>
			<div className={classes.descr}>{descr}</div>
		</Card>
	);
};

export default TotalCard;
