import React from 'react';
import Book from './books';

function Container(props) {
	const books = [
		{ title: 'Harry Potter', author: 'Rowling', pages: '256' },
		{ title: 'Lord Of The Rings', author: 'Tolkien', pages: '500' }
	];
	return (
		<table className='table '>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Pages</th>
				</tr>
			</thead>
			<tbody>
				{books.map((obj, i) => (
					<Book
						key={i}
						title={obj.title}
						author={obj.author}
						pages={obj.pages}
					/>
				))}
			</tbody>
		</table>
	);
}
export default Container;
