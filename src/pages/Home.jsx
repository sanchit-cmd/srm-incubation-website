import React, { useState } from 'react';
import Header from '../components/Header';
import Cta from '../components/Cta';
import Vision from '../components/Vision';
import Features from '../components/Features';
import MarqueeComponent from '../components/Marquee';

import p1 from '../assets/img/our-partner-1.png';
import p2 from '../assets/img/our-partner-2.png';
import p3 from '../assets/img/our-partner-3.png';
import p4 from '../assets/img/our-partner-4.png';
import p5 from '../assets/img/our-partner-5.png';

import c1 from '../assets/img/current-1.webp';
import c2 from '../assets/img/current-2.webp';
import c3 from '../assets/img/current-3.webp';
import c4 from '../assets/img/current-4.webp';
import c5 from '../assets/img/current-5.webp';

import g1 from '../assets/img/g1.webp';
import g2 from '../assets/img/g2.webp';
import g3 from '../assets/img/g3.webp';
import g4 from '../assets/img/g4.webp';
import g5 from '../assets/img/g5.png';
import g6 from '../assets/img/g6.jpg';

export default function Home() {
	const [ourPartners, setOurPartners] = useState([p1, p2, p3, p4, p5]);
	const [current, setCurrent] = useState([c1, c2, c3, c4, c5]);
	const [graduated, setGraduated] = useState([g1, g2, g3, g4, g5, g6]);

	return (
		<>
			<Header />
			<Cta />
			<Vision />
			<MarqueeComponent title={'Our Partners'} imgList={ourPartners} />
			<MarqueeComponent
				title={'Our Current Startups'}
				imgList={current}
			/>
			<MarqueeComponent
				title={'Our Graduated Startups'}
				imgList={graduated}
			/>
			<Features />
		</>
	);
}
