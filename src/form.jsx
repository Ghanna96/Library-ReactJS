import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			pages: ''
		};
	}

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value });
		console.log(this.state);
	};
	handleSubmit = e => {
		alert(`yo ${this.state.title}`);
		e.preventDefault();
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<span>Title :</span>
				<input
					type='text'
					id='title'
					value={this.state.title}
					onChange={this.handleChange}></input>
				<span>Author :</span>
				<input
					type='text'
					id='author'
					value={this.state.author}
					onChange={this.handleChange}></input>
				<span>Pages :</span>
				<input
					type='text'
					id='pages'
					value={this.state.pages}
					onChange={this.handleChange}></input>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}

export default Form;
