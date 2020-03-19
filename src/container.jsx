import React from 'react';
import Book from './books';

function Container(props) {
	const { library, changeStatus, remove } = props;
	const books = library.map((obj, i) => (
		<Book
			key={i}
			index={i + 1}
			title={obj.title}
			author={obj.author}
			pages={obj.pages}
			status={obj.read}
			changeStatus={() => {
				changeStatus(i);
			}}
			removeBook={() => {
				remove(i);
			}}
		/>
	));
	//console.log(books);
	return (
		<table className='table table-dark '>
			<thead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>Title</th>
					<th scope='col'>Author</th>
					<th scope='col'>Pages</th>
					<th scope='col'>Read?</th>
					<th scope='col'></th>
				</tr>
			</thead>
			<tbody>{books}</tbody>
		</table>
	);
}
export default Container;
