import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import {Product} from './Product';
import About from './About';

export default () => {
	return (
		<section>
			<Route exact={true} path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/products" component={Products} />
			<Route path="/products/:id" component={Product} />
		</section>
	);
};
