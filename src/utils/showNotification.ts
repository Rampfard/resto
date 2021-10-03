import { Dispatch } from 'redux';
import { removeNotification, setNotification } from '../store/ui-slice';

export const showNotification = (
	notification: {
		message: string;
		type: NotificationType;
	},
	dispatch: Dispatch,
	ms = 3000
) => {
	dispatch(setNotification(notification));

	setTimeout(() => {
		dispatch(removeNotification());
	}, ms);
};
