import classNames from 'classnames';
import classes from './Graph.module.scss';
import Circle from './Circle';
import { FC } from 'react';

interface GraphProps {
	tab?: string;
}

const Graph: FC<GraphProps> = ({ tab }) => {

	// Dummy data
	let values = [200, 122, 264];

	if (tab === 'Yesterday') {
		values = values.map((val) => val * 1.1);
	}

	if (tab === 'Week') {
		values = values.map((val) => val * 1.4);
	}

	return (
		<div className={classes.content}>
			<div id="graph" className={classes.graph}>
				<Circle
					className={classes['circle-big']}
					radius={88}
					fill={values[0] * 0.9}
				/>
				<Circle
					className={classes['circle-mid']}
					radius={76}
					fill={values[1] * 0.8}
				/>
				<Circle
					className={classes['circle-small']}
					radius={64}
					fill={values[2] * 0.7}
				/>
				<Circle transparent radius={52} />
			</div>
			<div className={classNames(classes.dots)}>
				<div className={classNames(classes.dot, classes['small-circle'])}>
					<span></span>
					<p className={classNames(classes.name)}>Dine In</p>
					<small className={classNames(classes.descr)}>
						{values[0].toFixed()} customers
					</small>
				</div>
				<div className={classNames(classes.dot, classes['mid-circle'])}>
					<span></span>
					<p className={classNames(classes.name)}>To Go</p>
					<small className={classNames(classes.descr)}>
						{values[1].toFixed()} customers
					</small>
				</div>
				<div className={classNames(classes.dot, classes['big-circle'])}>
					<span></span>
					<p className={classNames(classes.name)}>Delivery</p>
					<small className={classNames(classes.descr)}>
						{values[2].toFixed()} customers
					</small>
				</div>
			</div>
		</div>
	);
};

export default Graph;
