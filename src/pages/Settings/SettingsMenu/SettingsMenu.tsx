import React, { MouseEvent, useRef, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { ReactComponent as AboutIcon } from '@assets/about.svg';
import { ReactComponent as AppearanceIcon } from '@assets/appereance.svg';
import { ReactComponent as ManagementIcon } from '@assets/managment.svg';
import { ReactComponent as NotificationIcon } from '@assets/notification.svg';
import { ReactComponent as RestarauntIcon } from '@assets/restaurant.svg';
import { ReactComponent as SecurityIcon } from '@assets/security.svg';
import classes from './SettingsMenu.module.scss';
// import SettingsMenuLink from './SettingsMenuItem/SettingsMenuLink';

interface SettingsMenuProps {}

const SettingsMenu: React.FC<SettingsMenuProps> = () => {
  const { path } = useRouteMatch();
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const [indicatorOffset, setIndicatorOffset] = useState(5);

  const onClick = (e: MouseEvent) => {
    // console.log(e.target);
    setIndicatorOffset(3);
  };

  if (indicatorRef.current) {
    // console.log(indicatorRef.current?.getBoundingClientRect().top);
  }

  return (
    <ul className={classes['settings-menu']} onClick={onClick}>
      <span
        ref={indicatorRef}
        className={classes.indicator}
        style={{ top: indicatorOffset }}
      />
      <li className={classes['menu-item']}>
        <NavLink to={`${path}/appearance`} activeClassName={classes.active}>
          <h3 className={classes.title}>
            <AppearanceIcon />
            Appearance
          </h3>
          <p className={classes.subtitle}>Dark and Light mode, Font size</p>
        </NavLink>
      </li>
      {/* <SettingsMenuLink
				icon={<AppearanceIcon />}
				title="Appearance"
				to={`${path}/appearance`}
			>
				Dark and Light mode, Font size
			</SettingsMenuLink> */}
      <li className={classes['menu-item']}>
        <NavLink to={`${path}/mode`} activeClassName={classes.active}>
          <h3 className={classes.title}>
            <RestarauntIcon />
            Your Restaurant
          </h3>
          <p className={classes.subtitle}>Dark and Light mode, Font size</p>
        </NavLink>
      </li>
      <li className={classes['menu-item']}>
        <NavLink to={`${path}/management`} activeClassName={classes.active}>
          <h3 className={classes.title}>
            <ManagementIcon />
            Products Management
          </h3>
          <p className={classes.subtitle}>Manage your product, pricing, etc</p>
        </NavLink>
      </li>
      <li className={classes['menu-item']}>
        <NavLink to={`${path}/notifications`} activeClassName={classes.active}>
          <h3 className={classes.title}>
            <NotificationIcon style={{ width: 14, height: 14 }} />
            Notifications
          </h3>
          <p className={classes.subtitle}>Customize your notifications</p>
        </NavLink>
      </li>
      <li className={classes['menu-item']}>
        <NavLink to={`${path}/security`} activeClassName={classes.active}>
          <h3 className={classes.title}>
            <SecurityIcon />
            Security
          </h3>
          <p className={classes.subtitle}>Configure Password, PIN, etc</p>
        </NavLink>
      </li>
      <li className={classes['menu-item']}>
        <NavLink to={`${path}/about`} activeClassName={classes.active}>
          <h3 className={classes.title}>
            <AboutIcon />
            About Us
          </h3>
          <p className={classes.subtitle}>Find out more about Posly</p>
        </NavLink>
      </li>
    </ul>
  );
};

export default SettingsMenu;
