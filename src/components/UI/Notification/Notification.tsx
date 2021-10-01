import classNames from 'classnames';
import { FC } from 'react';
import { createPortal } from 'react-dom';
import classes from './Notification.module.scss';

interface NotificationProps {
	type: string;
}

const Notification: FC<NotificationProps> = ({ type, children }) => {
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
		document.getElementById('overlays')!
	);
};

export default Notification;
