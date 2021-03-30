import React from 'react';

const Loader = () => {
	return (
		<svg
			style={{
				margin: 'auto',
				background: 'transparent',
				display: 'block',
				shapeRendering: 'auto',
			}}
			width='200px'
			height='200px'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMidYMid'
		>
			<circle
				cx='50'
				cy='50'
				r='0'
				fill='none'
				stroke='#e90c59'
				stroke-width='1'
			>
				<animate
					attributeName='r'
					repeatCount='indefinite'
					dur='1.1363636363636365s'
					values='0;24'
					keyTimes='0;1'
					keySplines='0 0.2 0.8 1'
					calcMode='spline'
					begin='0s'
				></animate>
				<animate
					attributeName='opacity'
					repeatCount='indefinite'
					dur='1.1363636363636365s'
					values='1;0'
					keyTimes='0;1'
					keySplines='0.2 0 0.8 1'
					calcMode='spline'
					begin='0s'
				></animate>
			</circle>
			<circle
				cx='50'
				cy='50'
				r='0'
				fill='none'
				stroke='#46dff0'
				stroke-width='1'
			>
				<animate
					attributeName='r'
					repeatCount='indefinite'
					dur='1.1363636363636365s'
					values='0;24'
					keyTimes='0;1'
					keySplines='0 0.2 0.8 1'
					calcMode='spline'
					begin='-0.5681818181818182s'
				></animate>
				<animate
					attributeName='opacity'
					repeatCount='indefinite'
					dur='1.1363636363636365s'
					values='1;0'
					keyTimes='0;1'
					keySplines='0.2 0 0.8 1'
					calcMode='spline'
					begin='-0.5681818181818182s'
				></animate>
			</circle>
		</svg>
	);
};

export default Loader;
