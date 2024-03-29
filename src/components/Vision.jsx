import React from 'react';
import { FaRocket } from 'react-icons/fa';
import { GoTelescopeFill } from 'react-icons/go';

export default function Vision() {
	return (
		<div className='flex flex-col items-center justify-between my-20 gap-8'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 md:w-11/12 mx-auto '>
				<div className='px-6 py-8 bg-secondary text-white rounded-lg shadow-lg'>
					<h3 className='font-bold text-4xl text-center mb-4 flex justify-center items-center gap-4'>
						Our Mission{' '}
						<span>
							<FaRocket />
						</span>
					</h3>
					<ul className='flex flex-col justify-between gap-4 '>
						<li>
							To Create an ecosystem to sensitize, engage and
							support the innovators from ideation to product
							development
						</li>
						<li>
							To Enable the innovation community with access to
							best in class infrastructure, mentorship and funding
						</li>
						<li>
							To Protect the intellectual assets evolved out of
							inventive process
						</li>
					</ul>
				</div>
				<div className='px-6 py-8 bg-secondary text-white rounded-lg shadow-lg'>
					<h3 className='font-bold text-4xl text-center mb-4 flex justify-center items-center gap-4'>
						Our Vision{' '}
						<span>
							<GoTelescopeFill />
						</span>
					</h3>
					<p>
						Promote an entrepreneurial mindset, Kindle the fires of
						innovation in the campus and Contribute to building of
						the self-reliant nation
					</p>
				</div>
			</div>
			<button className='bg-primary px-6 py-4 font-semibold rounded text-white shadow-lg'>
				Learn More
			</button>
		</div>
	);
}
