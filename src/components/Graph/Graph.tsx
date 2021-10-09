import classNames from 'classnames';
import classes from './Graph.module.scss';
import Circle from './Circle';

const Graph = () => {
	// const smallCircle = getNumberRange();
	// const midCircle = getNumberRange();
	// const bigCircle = getNumberRange();

	return (
		<div className={classes.content}>
			<div id="graph" className={classes.graph}>
				<Circle className={classes['circle-big']} radius={88} fill={264} />
				<Circle className={classes['circle-mid']} radius={76} fill={122} />
				<Circle className={classes['circle-small']} radius={64} fill={200} />
				<Circle transparent radius={52} />
			</div>
			<div className={classNames(classes.dots)}>
				<div className={classNames(classes.dot, classes['small-circle'])}>
					<span></span>
					<p className={classNames(classes.name)}>Dine In</p>
					<small className={classNames(classes.descr)}>200 customers</small>
				</div>
				<div className={classNames(classes.dot, classes['mid-circle'])}>
					<span></span>
					<p className={classNames(classes.name)}>To Go</p>
					<small className={classNames(classes.descr)}>122 customers</small>
				</div>
				<div className={classNames(classes.dot, classes['big-circle'])}>
					<span></span>
					<p className={classNames(classes.name)}>Delivery</p>
					<small className={classNames(classes.descr)}>264 customers</small>
				</div>
			</div>
		</div>
	);
};

export default Graph;
