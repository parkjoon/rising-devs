import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getJobPosts } from '../../utils/api';
import { setJobPosts } from '../../actions/jobPosts';

class Jobs extends Component {
	componentDidMount() {
		getJobPosts()
			.then(res => {
				this.props.setJobPosts(res.data.jobs);
			})
			.catch(error => {
				console.log(error);
			});
	}

	renderJobPostPreviews() {
		return this.props.jobPosts.map(jobPost => {
			return <li key={jobPost.id} className="list-group-item">{jobPost.title}</li>;
		});
	}

	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default">
						<div className="panel-heading">Jobs</div>
						<div className="panel-body">
							<ul className="list-group">
								{this.renderJobPostPreviews()}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		jobPosts: state.jobPosts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setJobPosts: jobPosts => dispatch(setJobPosts(jobPosts))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Jobs);
