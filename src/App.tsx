import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Router } from 'react-router-dom';
import store, { history } from './store';
import Home from './routes/Home';
import Products from './routes/Products';
import About from './routes/About';
import AppHeader from './components/AppHeader';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router history={history}>
						<main>
							<AppHeader />
							<Route exact={true} path="/" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/products" component={Products} />
						</main>
					</Router>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
