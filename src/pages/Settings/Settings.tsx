import classNames from 'classnames';
import { Redirect, Route, useRouteMatch } from 'react-router';

import Appearance from './Appearance/Appearance';
import Management from './Management/Management';
import SettingsMenu from './SettingsMenu/SettingsMenu';

import classes from './Settings.module.scss';

const Settings: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <section className={classes.settings}>
      <h2 className={classNames('title', classes.title)}>Settings</h2>
      <div className={classes.container}>
        <SettingsMenu />
        <Route path={`${path}`}>
          <Redirect to={`${path}/management`} />
        </Route>
        <Route path={`${path}/management`}>
          <Management />
        </Route>
        <Route path={`${path}/appearance`}>
          <Appearance />
        </Route>
      </div>
    </section>
  );
};

export default Settings;
