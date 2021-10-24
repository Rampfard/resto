import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import classNames from 'classnames';

import { useAppSelector } from '@hooks/redux-hooks';
import useOutsideClick from '@hooks/use-outside-click';

import { ToggleButton } from '@components/UI';
import { ReactComponent as HomeIcon } from '@assets/home.svg';
import { ReactComponent as DiscountIcon } from '@assets/discount.svg';
import { ReactComponent as DashboardIcon } from '@assets/statistic.svg';
import { ReactComponent as MailIcon } from '@assets/mail.svg';
import { ReactComponent as NotificationIcon } from '@assets/notification.svg';
import { ReactComponent as SettingsIcon } from '@assets/settings.svg';
import { ReactComponent as LogoutIcon } from '@assets/logout.svg';
import logo from '@assets/logo.png';

import classes from './Menu.module.scss';

const Menu = () => {
  const { isCartVisible } = useAppSelector((state) => state.ui);
  const [isShown, setIsShown] = useState(false);

  const menuRef = useRef(null);

  const closeMenuHandler = () => {
    if (isShown) {
      setIsShown(false);
    }
  };

  useOutsideClick(menuRef, closeMenuHandler);

  const toggleMenuHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <aside
      ref={menuRef}
      className={classNames(classes.menu, {
        [classes.active]: isShown,
        [classes.hidden]: isCartVisible,
      })}
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
              to="/authorization"
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
