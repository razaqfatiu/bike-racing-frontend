import React from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Loader from '../Component/Loader';

const RidersList = (props) => {
	const [riders] = React.useState([
		{ name: 'Dustin Green', address: 'Hickory Hills, IL', id: '9009' },
		{ name: 'Dustin Green', address: 'Hickory Hills, IL', id: '9009' },
		{ name: 'Dustin Green', address: 'Hickory Hills, IL', id: '9009' },
		{ name: 'Dustin Green', address: 'Hickory Hills, IL', id: '9009' },
		{ name: 'Dustin Green', address: 'Hickory Hills, IL', id: '9009' },
		{ name: 'Dustin Green', address: 'Hickory Hills, IL', id: '9009' },
	]);
	console.log(props);
	return (
		<div className='riders'>
			<div className=' d-flex flex-column justify-content-center align-items-center hero'>
				<div className='display-4 text-white'>Riders</div>
			</div>
			{riders ? (
				<>
					<div className='row m-0 align-items-center  p-4 '>
						{riders.map((item) => (
							<div className='col-sm-6 col-md-4 col-lg-3 p-3'>
								<div
									className='p-4'
									style={{
										minHeight: '160px',
										width: '100%',
										// border: '1px solid #000',
										marginBottom: '10px',
										padding: '16px',
										boxShadow:
											'9px 8px 39px -12px rgba(0,0,0,0.27)',
									}}
								>
									<h3 className=''>{item.name}</h3>
									<p>{item.address}</p>
									<Link to={`/riders/${item.id}`}>
										View Profile
									</Link>
								</div>
							</div>
						))}
					</div>
					<ReactPaginate
						pageCount={2}
						containerClassName='pagination justify-content-center mt-3 mb-5'
						pageClassName='page-item'
						pageLinkClassName='page-link'
						previousClassName='page-item'
						previousLinkClassName='page-link'
						breakClassName='page-item'
						breakLinkClassName='page-link'
						activeClassName='active'
						nextClassName='page-item'
						nextLinkClassName='page-link'
					/>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default RidersList;
