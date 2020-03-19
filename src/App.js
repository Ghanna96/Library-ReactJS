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
			form: { title: '', author: '', pages: '', read: false },
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
	handleStatus = i => {
		const updateBook = this.state.library;
		updateBook[i].read = !updateBook[i].read;
		console.log(updateBook[i].read);
		this.setState({ library: updateBook });
	};
	handleRemove = i => {
		const updateBook = this.state.library.slice();
		updateBook.splice(i, 1);
		this.setState({ library: updateBook });
	};
	render() {
		const library = [...this.state.library];
		return (
			<div className='App'>
				<Header formSwap={this.handleForm} />
				<Form
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					currentValues={this.state.form}
					formSwap={this.handleForm}
					formShow={this.state.showForm}
				/>
				<Container
					library={library}
					changeStatus={this.handleStatus}
					remove={this.handleRemove}
				/>
			</div>
		);
	}
}

export default App;
