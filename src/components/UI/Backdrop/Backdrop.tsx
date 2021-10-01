import { createPortal } from 'react-dom';
import classes from './Backdrop.module.scss';

const Backdrop = () => {
	return createPortal(
		<div className={classes.backdrop}></div>,
		document.getElementById('overlays')!
	);
};

export default Backdrop;
