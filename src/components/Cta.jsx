import React from 'react';

export default function Cta() {
	return (
		<div className='w-10/12 grid-cols-1 sm:grid-cols-2 grid mx-auto gap-12 my-10 z-100'>
			<div className='flex items-center justify-start flex-col gap-4'>
				<h3 className='text-4xl font-semibold'>For Incubation</h3>
				<a
					href='https://google.com'
					className='bg-primary px-6 py-4 font-semibold rounded text-white shadow-md'
				>
					Apply Now
				</a>
			</div>
			<div className='flex items-center justify-start flex-col gap-4'>
				<h3 className='text-4xl font-semibold'>For Innovators</h3>
				<a
					href='https://google.com'
					className='bg-primary px-6 py-4 font-semibold rounded text-white cursor-pointer shadow-md'
				>
					Apply For Prototype Funding
				</a>
				<p className='text-sm text-center w-1/2 mx-auto'>
					supported by MOE's Institution's Innovation Council funded
					by NewGen IEDC SRM
				</p>
			</div>
		</div>
	);
}
