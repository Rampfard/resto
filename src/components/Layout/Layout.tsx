import classNames from 'classnames';
import { FC } from 'react';
import classes from './Layout.module.scss';

interface LayoutProps {
	className?: string;
}

const Layout: FC<LayoutProps> = ({ children, className }) => {
	return (
		<main className={classNames(classes.main, className)}>{children}</main>
	);
};

export default Layout;
