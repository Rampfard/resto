import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from '@components/index';

import { Home, Dashboard, Settings, Authorization } from '@pages/index';

const App = () => {
  return (
    <Layout>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/authorization">
          <Authorization />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
