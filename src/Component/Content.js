import React, { Component } from 'react';

class Content extends Component {
	constructor(props){
		super(props);
		this.state ={
			old_price: 100
		}

	}

	getstate = () => {
		return this.state.old_price;
	}

	render() {
		let {name, price} = this.props;
		return (
			<div className="content">
				Name: {name}<br/> 
				Price: {price}
				<h1>Content</h1>
			</div>
		);
	}
}

export default Content;