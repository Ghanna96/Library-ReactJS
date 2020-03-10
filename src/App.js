import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import Container from './container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
	state = {};
	render() {
		return (
			<div className='App'>
				<Header />
				<Form />
				<Container />
			</div>
		);
	}
}

export default App;
