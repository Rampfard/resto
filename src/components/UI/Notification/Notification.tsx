import { NotificationType } from '$types/index';
import classNames from 'classnames';
import { FC } from 'react';
import { createPortal } from 'react-dom';
import classes from './Notification.module.scss';

interface NotificationProps {
	type: NotificationType;
}

const Notification: FC<NotificationProps> = ({ type, children }) => {
	return createPortal(
		<div
			className={classNames(classes.notification, {
				[classes.success]: type === 'success',
				[classes.warn]: type === 'warn',
				[classes.error]: type === 'error',
			})}
		>
			{children}
		</div>,
		document.getElementById('overlays')!
	);
};

export default Notification;
