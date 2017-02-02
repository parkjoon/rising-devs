import React, { Component } from 'react';

export default class Jobs extends Component {
	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default">
						<div className="panel-heading">Jobs</div>
						<div className="panel-body">
							<ul className="list-group">
								<li className="list-group-item">First item</li>
								<li className="list-group-item">Second item</li>
								<li className="list-group-item">Third item</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
