import React, { Component } from 'react';

class Book extends Component {
	status = () => {
		return this.props.status ? 'Yes' : 'No';
	};
	getClass = () => {
		return this.props.status ? 'badge badge-success' : 'badge badge-danger';
	};
	render() {
		const {
			title,
			author,
			pages,
			changeStatus,
			index,
			removeBook
		} = this.props;

		return (
			<tr>
				<th scope='row'> {index}</th>
				<td>{title}</td>
				<td>{author}</td>
				<td>{pages}</td>
				<td onClick={changeStatus}>
					<span className={this.getClass()}>{this.status()}</span>
				</td>
				<td>
					<button className='btn btn-warning' onClick={removeBook}>
						{' '}
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default Book;
