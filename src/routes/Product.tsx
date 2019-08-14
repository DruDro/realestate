import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';

type TParams = { id: string };

export default ({ match }: RouteComponentProps<TParams>) => {
	return (
		<div>
			Product {match.params.id}
		</div>
	);
};
