import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav class='navbar sticky-top navbar-expand-lg bg-dark'>
			<div class='container'>
				<Link class='navbar-brand' to='/'>
					Bike Racing
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i class='fas fa-bars'></i>
				</button>

				<div
					class='collapse navbar-collapse'
					id='navbarSupportedContent'
				>
					<ul class='navbar-nav mr-auto w-100 justify-content-end'>
						<li class='nav-item active'>
							<Link class='nav-link' to='/'>
								Home <span class='sr-only'>(current)</span>
							</Link>
						</li>
						<li class='nav-item'>
							<Link class='nav-link' to='/photos'>
								Photos
							</Link>
						</li>
						<li class='nav-item'>
							<Link class='nav-link' to='/location'>
								Location
							</Link>
						</li>
						<li class='nav-item'>
							<Link class='nav-link' to='/riders'>
								Riders
							</Link>
						</li>
						<li class='nav-item'>
							<Link class='nav-link' to='/contest'>
								Contest
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
