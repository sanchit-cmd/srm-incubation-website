import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout(props) {
	return (
		<>
			<Navbar />
			<main className='min-h-screen max-w-screen relative overflow-hidden bg-white'>
				{props.children}
			</main>
			<Footer />
		</>
	);
}
