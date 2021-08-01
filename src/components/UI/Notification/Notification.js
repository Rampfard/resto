import { createPortal } from 'react-dom';

import classNames from 'classnames';

import classes from './Notification.module.scss';

const Notification = ({ type, children }) => {
	let classType;

	if (type === 'success') {
		classType = classes.success;
	}

	if (type === 'error') {
		classType = classes.error;
	}

	return createPortal(
		<div className={classNames(classes.notification, classType)}>
			{children}
		</div>,
		document.getElementById('overlays')
	);
};

export default Notification;
