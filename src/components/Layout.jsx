import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

export default function Layout(props) {
	return (
		<>
			<NavBar />
			<main className='min-h-screen max-w-screen relative overflow-hidden bg-white'>
				{props.children}
			</main>
			<Footer />
		</>
	);
}
