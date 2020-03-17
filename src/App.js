import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import Container from './container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: { title: '', author: '', pages: '', read: '' },
			library: [],
			showForm: false
		};
	}
	handleForm = () => {
		this.setState({ showForm: !this.state.showForm });
	};
	handleChange = e => {
		const formData = Object.assign(this.state.form);
		formData[e.target.name] = e.target.value;
		this.setState({ form: formData });
		//console.log(this.state.form);
	};
	handleSubmit = e => {
		e.preventDefault();
		const book = Object.assign(this.state.form);
		const lib = Object.assign(this.state.library);
		lib.push(book);
		this.setState({
			form: { title: '', author: '', pages: '', read: '' },
			library: lib
		});
		console.log('books:', this.state.library);
	};
	render() {
		const library = [...this.state.library];
		return (
			<div className='App'>
				<Header />
				<Form
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					currentValues={this.state.form}
					formSwap={this.handleForm}
					formShow={this.state.showForm}
				/>
				<Container library={library} />
			</div>
		);
	}
}

export default App;
