import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';
import store, { history } from './store';
import AppHeader from './components/AppHeader';
import Routes from './routes';
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router history={history}>
						<main>
							<AppHeader />
							<Routes/>
						</main>
					</Router>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
