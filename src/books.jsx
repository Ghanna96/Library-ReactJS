import React from 'react';

const Book = props => {
	const { title, author, pages } = props;
	return (
		<tr>
			<td>{title}</td>
			<td>{author}</td>
			<td>{pages}</td>
		</tr>
	);
};

export default Book;
