import React from 'react';
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

const Location = () => {
	return (
		<div className='location'>
			<div className=' d-flex flex-column justify-content-center align-items-center hero'>
				<div className='display-4 text-white'>Bikers Location</div>
				{/* {!data && <Loader />} */}
			</div>
			<div>
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

export default Location;
