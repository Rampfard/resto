import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Dashboard from './pages/Dashboard';

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
					<Cart />
					<Payment />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</Layout>
	);
};

export default App;


