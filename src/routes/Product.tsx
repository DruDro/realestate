import * as React from 'react';

export class Product extends React.Component {
	constructor(props: any) {
		super(props);
		this.state = {
			productId: null,
		};
	}
	componentDidMount() {
		this.setState((state, props) => ({
			productId: 1,
		}));
	}
	render() {
		return (
			<div>
				Product
			</div>
		);
	}
}
