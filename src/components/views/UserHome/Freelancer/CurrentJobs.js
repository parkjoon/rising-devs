import React, { Component } from 'react';

export default class CurrentJobs extends Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">Current Jobs</div>
				<div className="panel-body">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="progress">
								<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
