import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '@components/Layout/Layout';
import Menu from '@components/Menu/Menu';
import Dashboard from '@pages/Dashboard/Dashboard';
import Home from '@pages/Home/Home';
import Settings from '@pages/Settings/Settings';
import Authorization from '@pages/Authorization/Authorization';

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
