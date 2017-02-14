import React, { Component } from 'react';
import { Link } from 'react-router';

import Banner from './Banner';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Banner />

				<div className="row">
					<div className="col-md-12 text-center">
						<div className="btn-group">
							<Link to='/jobs' className="btn btn-info btn-lg">View All Jobs</Link>
							<Link to='/freelancers' className="btn btn-info btn-lg">View All Freelancers</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
