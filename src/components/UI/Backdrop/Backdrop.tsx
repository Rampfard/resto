import { FC } from 'react';
import { createPortal } from 'react-dom';
import classes from './Backdrop.module.scss';

interface BackdropProps {
	onClick?: () => void;
}

const Backdrop: FC<BackdropProps> = (props) => {
	return createPortal(
		<div className={classes.backdrop} {...props}></div>,
		document.getElementById('overlays')!
	);
};

export default Backdrop;
