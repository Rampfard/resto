import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SettingsMenuLink.module.scss';

interface SettingsMenuLinkProps {
	icon?: JSX.Element;
	to: string;
	title: string;
}

const SettingsMenuLink: React.FC<SettingsMenuLinkProps> = ({
	icon,
	to,
	title,
	children,
}) => (
	<li className={classes['menu-item']}>
		<NavLink to={to} activeClassName={classes.active}>
			<h3 className={classes.title}>
				{icon ? icon : null}
				{title}
			</h3>
			<p className={classes.subtitle}>{children}</p>
		</NavLink>
	</li>
);

export default SettingsMenuLink;
