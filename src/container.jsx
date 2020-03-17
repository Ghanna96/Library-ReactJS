import React from 'react';
import Book from './books';

function Container(props) {
	const { library } = props;
	const books = library.map((obj, i) => (
		<Book key={i} title={obj.title} author={obj.author} pages={obj.pages} />
	));
	//console.log(books);
	return (
		<table className='table '>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Pages</th>
				</tr>
			</thead>
			<tbody>{books}</tbody>
		</table>
	);
}
export default Container;
