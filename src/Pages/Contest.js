import React from 'react';

const Contest = () => {
	return (
		<div className='contest'>
			<div className=' d-flex flex-column justify-content-center align-items-center hero'>
				<div className='text-white text-center'>
					<h3 className='display-4'>Contest</h3>
					<p>Send us a message</p>
				</div>
			</div>
			<div className='p-4 mx-auto' style={{ maxWidth: '600px' }}>
				<form>
					<div className='form-group '>
						<label htmlFor='inputEmail4'>First Name</label>
						<input type='text' className='form-control' />
					</div>
					<div className='form-group '>
						<label htmlFor='inputEmail4'>Last Name</label>
						<input type='text' className='form-control' />
					</div>
					<div className='form-group '>
						<label htmlFor='inputEmail4'>Email</label>
						<input type='email' className='form-control' />
					</div>

					<div className='form-group'>
						<label htmlFor='inputAddress'>Slogan</label>
						<textarea type='text' className='form-control' />
					</div>

					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contest;
