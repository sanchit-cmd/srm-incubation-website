import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = ({ mode, handleMode }) => {
	const [nav, setNav] = useState(false);

	useEffect(() => {
		// if (nav) {
		// 	document.body.style.overflow = 'auto';
		// } else {
		// 	document.body.style.overflow = 'hidden';
		// }
		// return () => {
		// 	document.body.style.overflow = 'auto';
		// };
	}, [nav]);

	const handleNav = () => {
		setNav(prevNav => !prevNav);
	};

	return (
		<div
			name='home'
			className={`flex flex-row items-center justify-between h-24 max-w-[1240px] mx-auto px-6 bg-gray-900 text-white`}
		>
			<ul
				className={`flex-row  text-lg w-full items-center gap-4 hidden md:flex justify-between`}
			>
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

			<div
				className={`cursor-pointer block md:hidden z-50 ${
					nav ? 'fixed top-10 left-6' : ''
				}`}
				onClick={handleNav}
			>
				{!nav ? (
					<AiOutlineMenu size={20} />
				) : (
					<AiOutlineClose size={20} />
				)}
			</div>

			<div
				className={`${
					nav
						? 'fixed left-0 top-0 w-[100%] z-40 h-full border-r ease-in-out duration-500'
						: 'fixed left-[-100%]'
				} bg-gray-900 text-white`}
			>
				<ul className='pt-24 uppercase gap-4 flex flex-col px-6 justify-center items-center my-auto'>
					<li className='mb-6'>
						<h3 className='text-xl text-wrap text-left mt-5'>
							Directorate of Entrepreneurship and Innovation
						</h3>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							Home
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							Facilities
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							Funding Programs
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							IIC
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							Events
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							Mentors
						</Link>
					</li>
					<li>
						<Link to={'/'} onClick={handleNav}>
							Team
						</Link>
					</li>
					<li>
						<Link to={'/'}>Courses</Link>
					</li>
					<li className='mt-6'>
						<Link
							to={'/'}
							onClick={handleNav}
							className='bg-primary px-6 py-4 font-semibold rounded mt-6'
						>
							Apply Now
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
