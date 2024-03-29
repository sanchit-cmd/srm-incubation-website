import React from 'react';
import FeatureCard from './FeatureCard';

import { TbPigMoney } from 'react-icons/tb';
import { BsPersonWorkspace } from 'react-icons/bs';
import { GoLaw } from 'react-icons/go';
import { FaBitcoinSign } from 'react-icons/fa6';
import { LuScrollText } from 'react-icons/lu';
import { MdWifiCalling3 } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdSettings } from 'react-icons/md';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import { BsPeopleFill } from 'react-icons/bs';
import { FaPeopleArrows } from 'react-icons/fa6';

export default function Features() {
	return (
		<div className='my-32'>
			<h1 className='capitalize text-4xl md:text-5xl text-center mb-8 font-bold '>
				What we Offer
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-3/5 mx-auto gap-4'>
				<FeatureCard logo={<TbPigMoney />} title={'Seed Funding'} />
				<FeatureCard
					logo={<BsPersonWorkspace />}
					title={'Work Space'}
				/>
				<FeatureCard logo={<GoLaw />} title={'Legal Assistance'} />
				<FeatureCard
					logo={<FaBitcoinSign />}
					title={'Design Branding'}
				/>
				<FeatureCard
					logo={<LuScrollText />}
					title={'Patent Registration'}
				/>
				<FeatureCard
					logo={<MdWifiCalling3 />}
					title={'Industry Advisors'}
				/>
				<FeatureCard
					logo={<FaCloudDownloadAlt />}
					title={'Cloud Credits'}
				/>
				<FeatureCard
					logo={<FaPeopleGroup />}
					title={'Technical Mentorship'}
				/>
				<FeatureCard
					logo={<MdSettings />}
					title={'Fabrication Facility'}
				/>
				<FeatureCard
					logo={<FaMagnifyingGlassChart />}
					title={'Market Validation'}
				/>
				<FeatureCard
					logo={<BsPeopleFill />}
					title={'Co-Working Space'}
				/>
				<FeatureCard
					logo={<FaPeopleArrows />}
					title={'Alumni Connect'}
				/>
			</div>
		</div>
	);
}
