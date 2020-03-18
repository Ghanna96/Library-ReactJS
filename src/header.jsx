import React from 'react';

const Header = props => {
	return (
		<header>
			<div className='bg-dark text-white mb-2'>
				<h1>my Library</h1>
				<button
					className='btn btn-secondary btn-lg'
					onClick={() => {
						props.formSwap();
					}}>
					Add book
				</button>
			</div>
		</header>
	);
};

export default Header;
