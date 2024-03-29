import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import NavBar from './NavbarNew';

export default function Layout(props) {
	return (
		<>
			{/* <Navbar /> */}
			<NavBar />
			<main className='min-h-screen max-w-screen relative overflow-hidden bg-white'>
				{props.children}
			</main>
			<Footer />
		</>
	);
}
