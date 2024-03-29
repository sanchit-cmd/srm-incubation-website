import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflowX = 'hidden';
		document.body.style.maxWidth = '100vw';
		open
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	}, [open]);

	function openNavbar() {
		setOpen(true);
	}

	function closeNavBar() {
		setOpen(false);
	}

	return (
		<>
			<nav className='bg-gray-900 text-white py-4 md:py-8 sticky top-0 left-0 w-full shadow-xl z-50'>
				<div className='w-10/12 mx-auto flex justify-between items-center'>
					<ul className='w-full justify-between items-center gap-4 hidden md:flex'>
						<li>
							<Link className='pointer' to={'/'}>
								Home
							</Link>
						</li>
						<li>
							<Link to={'/'}>Facilities</Link>
						</li>
						<li>
							<Link to={'/'}>Funding Programs</Link>
						</li>
						<li>
							<Link to={'/'}>IIC</Link>
						</li>
						<li>
							<Link to={'/'}>Events</Link>
						</li>
						<li>
							<Link to={'/'}>Mentors</Link>
						</li>
						<li>
							<Link to={'/'}>Team</Link>
						</li>
						<li>
							<Link to={'/'}>Courses</Link>
						</li>
						<li>
							<Link
								to={'/'}
								className='bg-primary px-6 py-4 font-semibold rounded'
							>
								Apply Now
							</Link>
						</li>
					</ul>
					<button
						className='md:hidden text-4xl self-end'
						onClick={openNavbar}
					>
						<FiMenu />
					</button>
				</div>

				{/* Mobile NavBar */}
			</nav>

			<div
				className={`bg-gray-900 min-h-screen absolute top-0 right-0 md:hidden items-center justify-between w-full flex-col text-white px-10 ${
					open ? 'translate-x-0' : 'translate-x-full'
				} transition-transform ease-linear duration-300 `}
			>
				<button
					onClick={closeNavBar}
					className='text-4xl absolute top-7 right-8'
				>
					<FiX />
				</button>
				<h3 className='text-3xl text-wrap text-left mt-5'>
					Directorate of Entrepreneurship and Innovation
				</h3>
				<ul className='h-full flex justify-center items-center flex-col gap-6 md:hidden mt-6'>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Home
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Facilities
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Funding Programs
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							IIC
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Events
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Mentors
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Team
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={closeNavBar}>
							Courses
						</Link>
					</li>
					<li className='mt-2'>
						<Link
							to={'/'}
							onClick={closeNavBar}
							className='bg-primary px-6 py-4 font-semibold rounded'
						>
							Apply Now
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
