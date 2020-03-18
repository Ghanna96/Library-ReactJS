import React, { Component } from 'react';

class Book extends Component {
	status = () => {
		return this.props.status ? 'Yes' : 'No';
	};
	getClass = () => {
		return this.props.status ? 'badge badge-success' : 'badge badge-danger';
	};
	render() {
		const { title, author, pages, changeStatus } = this.props;

		return (
			<tr>
				<td>{title}</td>
				<td>{author}</td>
				<td>{pages}</td>
				<td className={this.getClass()} onClick={changeStatus}>
					{this.status()}
				</td>
			</tr>
		);
	}
}

export default Book;
