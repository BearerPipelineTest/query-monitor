import * as React from 'react';
import { Tabular, iPanelProps } from 'qmi';
import { __, _x, _n, sprintf } from '@wordpress/i18n';

export interface LogItem {
	level: string;
	message: string;
}

export interface iLoggerProps extends iPanelProps {
	data: {
		logs: LogItem[];
	};
}

class Logger extends React.Component<iLoggerProps, Record<string, unknown>> {

	render() {
		const { data } = this.props;

		if ( ! data.logs || ! data.logs.length ) {
			return null;
		}

		return (
			<Tabular id={this.props.id}>
				<thead>
					<tr>
						<th scope="col">
							{__( 'Level', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Message', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Caller', 'query-monitor' )}
						</th>
						<th scope="col">
							{__( 'Component', 'query-monitor' )}
						</th>
					</tr>
				</thead>
				<tbody>
					{data.logs.map(row=>
						<tr>
							<td>{row.level}</td>
							<td>{row.message}</td>
							<td>Caller</td>
							<td>Component</td>
						</tr>
					)}
				</tbody>
			</Tabular>
		)
	}

}

export default Logger;
