import React from 'react';

import useSWR from 'swr';
import Loader from '../Component/Loader';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const iconBike = new L.Icon({
	iconUrl: 'INSERT ICON HERE',
	iconRetinaUrl: 'INSERT ICON HERE',
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(60, 75),
	className: 'leaflet-div-icon',
});

const Rider = ({ match }) => {
	const [riderId] = React.useState(match.params.riderId);
	// const { data, error } = useSWR('API TO FETCH RIDER DETAILS');
	const [rider] = React.useState({
		name: 'Dustin Green',
		address: 'Hickory Hills, IL',
		id: '9009',
	});

	// if (error) {
	// 	return (
	// 		<div className='text-center mt-5'>
	// 			<h4>failed to load</h4>
	// 		</div>
	// 	);
	// }

	return (
		<div className='riders'>
			<div className=' d-flex flex-column justify-content-center align-items-center hero'>
				<div className='text-white text-center'>
					<h3 className='display-4'>{rider.name}</h3>
					<p>{rider.address}</p>
				</div>
			</div>
			<div
				style={{
					width: '80%',
					margin: 'auto',
					boxShadow: '9px 8px 39px -12px rgba(0,0,0,0.27)',
					padding: '20px',
					marginTop: '20px',
					marginBottom: '20px',
				}}
			>
				<MapContainer
					center={[51.505, -0.09]}
					zoom={13}
					scrollWheelZoom={true}
				>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					/>
					<Marker position={[51.505, -0.09]} icon={iconBike}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default Rider;
