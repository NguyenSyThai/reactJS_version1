import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Right_column from './Right_column';
import Left_column from './Left_column';

class Com_1 extends Component {
	render() {
		return (
			<div>
				<Header />
				<Content />
				<Footer />
				<Right_column />
				<Left_column />
			</div>
		);
	}
}

export default Com_1;