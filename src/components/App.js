import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div className="body">
				{React.cloneElement(this.props.children, { auth: this.props.route.auth })}
			</div>
		);
	}
}
