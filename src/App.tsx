import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Settings from './pages/Settings';

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
			</Switch>
		</Layout>
	);
};

export default App;
