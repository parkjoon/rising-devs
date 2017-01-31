import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, this.propsToPass)}
			</div>
		);
	}
}
