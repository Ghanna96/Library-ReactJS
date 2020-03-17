import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { showForm: false };
	}
	showForm = () => {
		this.setState({ showForm: !this.state.showForm });
	};
	renderForm() {
		const { onSubmit, onChange, currentValues, formSwap } = this.props;
		const { title, author, pages } = currentValues;
		return (
			<div className='popUp'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h4 className='modal-title'>New Book</h4>
						</div>
						<form
							onSubmit={e => {
								onSubmit(e);
								formSwap();
							}}>
							<div className='modal-body'>
								<span>Title :</span>
								<input
									type='text'
									name='title'
									value={title}
									onChange={onChange}></input>
								<span>Author :</span>
								<input
									type='text'
									name='author'
									value={author}
									onChange={onChange}></input>
								<span>Pages :</span>
								<input
									type='text'
									name='pages'
									value={pages}
									onChange={onChange}></input>
							</div>

							<div className='modal-footer'>
								<input
									type='submit'
									value='Submit'
									className='btn btn-success'
								/>
								<button
									type='button'
									className='btn btn-danger'
									onClick={() => {
										this.props.formSwap();
									}}>
									Close
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
	render() {
		// const { onSubmit, onChange, currentValues } = this.props;
		//  const { title, author, pages } = currentValues;
		console.log(this.props.formShow);

		return <div>{this.props.formShow && this.renderForm()}</div>;
	}
}

export default Form;
