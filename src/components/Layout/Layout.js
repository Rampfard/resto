import classes from './Layout.module.scss';

const Layout = ({ children }) => {
	return <main className={classes.main}>{children}</main>;
};

export default Layout;
