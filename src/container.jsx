import React from 'react';
import Book from './books';

function Container(props) {
	const { library, changeStatus } = props;
	const books = library.map((obj, i) => (
		<Book
			key={i}
			title={obj.title}
			author={obj.author}
			pages={obj.pages}
			status={obj.read}
			changeStatus={() => {
				changeStatus(i);
			}}
		/>
	));
	//console.log(books);
	return (
		<table className='table table-dark '>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Pages</th>
					<th>Read?</th>
				</tr>
			</thead>
			<tbody>{books}</tbody>
		</table>
	);
}
export default Container;
