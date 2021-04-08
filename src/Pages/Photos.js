import React from 'react';
import useSWR from 'swr';
import ReactPaginate from 'react-paginate';
import Loader from '../Component/Loader';

const Photos = () => {
	const [activePage, setActivePage] = React.useState(1);
	const { data, error } = useSWR(
		`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6f123e219bf51af7ea6371218595797c&extras=&per_page=40&page=${activePage}&format=json&nojsoncallback=1&tags=bicycle&tag_mode=and&tags=bikerace,BoulderBikeTour`
	);

	if (error) {
		return <div>failed to load</div>;
	}

	console.log(data);

	const url = (farmId, serverId, id, secret) => {
		return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
	};

	return (
		<div className='photos'>
			<div className=' d-flex flex-column justify-content-center align-items-center hero'>
				<div className='display-4 text-white'>Photo Gallery</div>
				{/* {!data && <Loader />} */}
			</div>
			{data ? (
				<>
					<div className='row no-gutter m-0 align-items-center '>
						{data.photos.photo.map((item) => (
							<div
								className='col-sm-6 col-md-4 col-lg-3 p-0'
								style={{
									height: '300px',
									width: '100%',
									// border: '8px solid #fff',
								}}
							>
								<img
									style={{
										padding: '5px',
										objectFit: 'cover',
										height: '300px',
										width: '100%',
										objectPosition: 'center',
										boxShadow:
											'9px 8px 39px -12px rgba(0,0,0,0.27)',
									}}
									src={url(
										item.farm,
										item.server,
										item.id,
										item.secret
									)}
									alt=''
								/>
							</div>
						))}
					</div>
					<ReactPaginate
						pageCount={data.photos.pages}
						containerClassName='pagination justify-content-center mt-3 mb-5'
						pageClassName='page-item'
						pageLinkClassName='page-link'
						previousClassName='page-item'
						previousLinkClassName='page-link'
						breakClassName='page-item'
						breakLinkClassName='page-link'
						activeClassName='active'
						nextClassName='page-item'
						onPageChange={({ selected }) =>
							setActivePage(selected + 1)
						}
						nextLinkClassName='page-link'
					/>
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default Photos;
