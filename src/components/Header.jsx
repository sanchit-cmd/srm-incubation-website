import React from 'react';
import HeroImg from '../assets/img/hero.png';

import srmLogo from '../assets/img/srm-logo-2.png';
import dieLogo from '../assets/img/sidc_logo.png';

export default function Header() {
	return (
		<>
			<div className='grid grid-cols-1 px-6 sm:grid-cols-2 md:px-10'>
				<div className='flex flex-col items-start justify-center gap-4'>
					<div className='mt-8 justify-center flex md:justify-start items-center gap-6 w-full'>
						<img src={dieLogo} alt='' className='h-16' />
						<img src={srmLogo} alt='' className='h-16' />
					</div>
					<div className='text-black mt-4 w-full'>
						<h1 className=' mx-auto text-center md:text-left text-3xl sm:text-4l md:text-5xl w-full'>
							We work with{' '}
							<span className='block font-extrabold text-secondary'>
								Aspiring Entreprenuers
							</span>{' '}
							to turn their ideas into{' '}
							<span className='block font-extrabold'>
								Thriving Ventures.
							</span>
						</h1>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<img src={HeroImg} alt='' className='w-80 md:w-full' />
				</div>
			</div>
		</>
	);
}
