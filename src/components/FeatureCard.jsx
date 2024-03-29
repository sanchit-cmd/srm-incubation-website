import React from 'react';

export default function FeatureCard({ logo, title }) {
	return (
		<div className='border-primary border-2 flex items-center justify-between flex-col gap-3 px-4 py-8 mx-auto rounded-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow ease-linear w-full'>
			<div className='text-4xl text-center'>{logo}</div>
			<p className='text-xl capitalize text-center'>{title}</p>
		</div>
	);
}
