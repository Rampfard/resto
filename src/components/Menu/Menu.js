import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useOutsideClick from '../../hooks/use-outside-click';

import { ToggleButton } from '../UI';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as DiscountIcon } from '../../assets/discount.svg';
import { ReactComponent as DashboardIcon } from '../../assets/statistic.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';
import { ReactComponent as NotificationIcon } from '../../assets/notification.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as LogoutIcon } from '../../assets/logout.svg';
import logo from '../../assets/logo.png';

import classes from './Menu.module.scss';

const Menu = () => {
	const { isCartVisible } = useSelector((state) => state.ui);
	const [isShown, setIsShown] = useState(false);

	const menuRef = useRef(null);

	const closeMenuHandler = () => {
		if (isShown) {
			setIsShown(false);
		}
	};

	useOutsideClick(menuRef, closeMenuHandler);

	let hiddenClass = classes.hidden;

	const toggleMenuHandler = () => {
		setIsShown(!isShown);
	};

	const itemClasses = `${classes['nav-item']}`;

	return (
		<aside
			ref={menuRef}
			className={classNames(
				classes.menu,
				isShown && classes.active,
				isCartVisible && hiddenClass
			)}
		>
			<ToggleButton
				className={classNames(classes['menu-btn'])}
				onClick={toggleMenuHandler}
			>
				Menu
			</ToggleButton>

			<div className={classes.logo}>
				<img src={logo} alt="Logo" />
			</div>
			<nav className={classes.nav}>
				<ul className={classes['nav-list']}>
					<li className={classes['nav-item']}>
						<div className={classes.angle}></div>
						<NavLink
							to="/home"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<HomeIcon />
							</span>
						</NavLink>
					</li>
					<li className={classes['nav-item']}>
						<NavLink
							to="/discount"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<DiscountIcon />
							</span>
						</NavLink>
					</li>
					<li className={classes['nav-item']}>
						<NavLink
							to="/dashboard"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<DashboardIcon />
							</span>
						</NavLink>
					</li>
					<li className={classes['nav-item']}>
						<NavLink
							to="/mail"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<MailIcon />
							</span>
						</NavLink>
					</li>
					<li className={classes['nav-item']}>
						<NavLink
							to="/notifications"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<NotificationIcon />
							</span>
						</NavLink>
					</li>
					<li className={classes['nav-item']}>
						<NavLink
							to="/settings"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<SettingsIcon />
							</span>
						</NavLink>
					</li>
					<li className={classes['nav-item']}>
						<NavLink
							to="/auth"
							className={classes['nav-link']}
							activeClassName={classes.active}
						>
							<span>
								<LogoutIcon />
							</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Menu;
