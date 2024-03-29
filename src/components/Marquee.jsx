import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarqueeComponent({ imgList, title }) {
	return (
		<div className='my-32 overflow-x-hidden w-screen'>
			<h3 className='mb-8 text-center text-4xl font-bold'>{title}</h3>
			<Marquee>
				{imgList.map((img, index) => (
					<img
						src={img}
						key={index}
						alt={title}
						className='h-20 mx-10'
					></img>
				))}
			</Marquee>
		</div>
	);
}
