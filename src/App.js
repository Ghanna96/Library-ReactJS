import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import Container from './container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const exampleBooks = [
	{
		title: '1984',
		author: 'George Orwell',
		pages: 328,
		read: false
	},
	{
		title: 'The Lord of The Rings',
		author: 'J.R.R. Tolkien',
		pages: 1216,
		read: true
	},
	{
		title: 'The Picture of Dorian Gray ',
		author: 'Oscar Wilde',
		pages: 272,
		read: true
	},
	{
		title: 'Flow: The Psychology of Optimal Experience',
		author: 'Mihaly Csikszentmihalyi',
		pages: 334,
		read: true
	}
];
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
		this.updateStorage(lib);
	};
	handleStatus = i => {
		const updateBook = this.state.library;
		updateBook[i].read = !updateBook[i].read;
		this.setState({ library: updateBook });
		this.updateStorage(updateBook);
	};
	handleRemove = title => {
		const updateBook = this.state.library.filter(x => x.title !== title);
		// updateBook.splice(i, 1);
		this.setState({ library: updateBook });
		this.updateStorage(updateBook);
	};
	componentDidMount() {
		const storage = JSON.parse(localStorage.getItem('library'));
		const library = storage ? storage : exampleBooks;
		this.setState({ library: library });
	}
	updateStorage = library => {
		console.log(library);
		localStorage.setItem('library', JSON.stringify(library));
	};
	render() {
		const library = [...this.state.library];
		return (
			<div className='App'>
				<Header formSwap={this.handleForm} />
				<Container
					library={library}
					changeStatus={this.handleStatus}
					remove={this.handleRemove}
				/>
				<Form
					onSubmit={this.handleSubmit}
					onChange={this.handleChange}
					currentValues={this.state.form}
					formSwap={this.handleForm}
					formShow={this.state.showForm}
				/>
			</div>
		);
	}
}

export default App;
