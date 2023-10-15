"use client";

import React, { useRef } from "react";
import Beatzz1 from "../../public/assets/Beatzz1.png";
import Beatzz2 from "../../public/assets/Beatzz2.png";
import Beatzz3 from "../../public/assets/Beatzz3.png";
import Beatzz4 from "../../public/assets/Beatzz4.png";
import Image from "next/image";
import useIntersectionObserver from "@/Hooks/useIntersectionObserver";

const EachProject = () => {
	const divRef1 = useRef<HTMLDivElement | null>(null);
	const divRef2 = useRef<HTMLDivElement | null>(null);
	const divRef3 = useRef<HTMLDivElement | null>(null);
	const divRef4 = useRef<HTMLDivElement | null>(null);

	const isVisible1 = useIntersectionObserver(divRef1, { threshold: 0 });
	const isVisible2 = useIntersectionObserver(divRef2, { threshold: 0 });
	const isVisible3 = useIntersectionObserver(divRef3, { threshold: 0 });
	const isVisible4 = useIntersectionObserver(divRef4, { threshold: 0 });

	return (
		<section className="m-auto mt-20 overflow-x-hidden lg:max-w-[1024px]">
			<h1 className="w-max text-3xl font-semibold text-blue-400">Beatzz</h1>
			<div ref={divRef1} style={{ marginTop: `50px` }} className={`opacity-0 ${isVisible1 && `animate-leftAnimation`}`}>
				<Image src={Beatzz1} alt="Beatzz Website Img" style={{ width: `100%` }} />
				<p className="mt-3 text-center text-xs font-semibold min-[478px]:text-base">
					<span className="text-sm text-blue-400 min-[478px]:text-lg">🎧 Beatzz</span>: The Ultimate E-Commerce Experience for Headphone Enthusiasts
				</p>
				<p className="mt-5 text-sm">
					Step into a world of unparalleled audio bliss with Beatzz, a premium e-commerce platform dedicated exclusively to headphones. Designed with a laser focus on user experience, Beatzz
					isn&apos;t just another online shop—it&apos;s a journey through the finest aural experiences money can buy.
				</p>
			</div>
			<div ref={divRef2} className={`opacity-0 ${isVisible2 && `animate-rightAnimation`}`} style={{ marginTop: `30px` }}>
				<Image src={Beatzz2} alt="Beatzz Website Img" style={{ width: `100%` }} />
				<h1 className="mt-10 text-left font-semibold">
					<span className="animated-underline text-blue-400">Features</span> at a Glance 🔍
				</h1>
				<ul className="mt-4 list-disc text-sm">
					<li>
						<span className="font-bold text-blue-400">Sort with Ease</span> : Customize your shopping experience with dynamic filters, sorting headphones by price or rating.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Cart Functionality</span> : A seamless and intuitive cart interface that makes adding products and checking out a breeze.
					</li>
				</ul>
			</div>
			<div ref={divRef3} className={`opacity-0 ${isVisible3 && `animate-leftAnimation`}`} style={{ marginTop: `30px` }}>
				<Image src={Beatzz3} alt="Beatzz Website Img" style={{ width: `100%` }} />
				<h1 className="mt-10 text-left font-semibold">
					Under the <span className="animated-underline text-blue-400">Hood</span> 🛠️
				</h1>
				<ul className="mt-4 list-disc text-sm">
					<li>
						<span className="font-bold text-blue-400">Backend</span> : Built on Node and Express, our robust backend APIs ensure optimal performance and security.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">MongoDB Atlas & Mongoose</span> : Advanced database handling that offers speed, scalability, and a no-compromise attitude towards data integrity.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Stripe Payments</span> : A fully integrated payment gateway that provides users with a quick and secure checkout experience.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Redis Cache</span> : Advanced caching mechanisms for database calls, powered by Redis, to speed up repetitive queries.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">JWT Authentication</span> : Comprehensive user authentication using JSON Web Tokens for a secure and personalized experience.
					</li>
				</ul>
			</div>
			<div ref={divRef4} className={`opacity-0 ${isVisible4 && `animate-rightAnimation`}`} style={{ marginTop: `30px` }}>
				<Image src={Beatzz4} alt="Beatzz Website Img" style={{ width: `100%` }} />
				<h1 className="mt-10 text-left font-semibold">
					<span className="animated-underline text-blue-400">Frontend </span>Tools 🌐
				</h1>
				<ul className="mt-4 list-disc text-sm">
					<li>
						<span className="font-bold text-blue-400">React and Redux</span> : Crafted with React and enhanced by Redux for centralized state management, Beatzz offers a smooth, state-of-the-art
						UI/UX.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Intersection Observer API</span> : Immerse yourself in smooth scroll animations, optimized for both performance and aesthetic appeal.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">React-hot-toast</span> : Enjoy real-time toast notifications, skillfully integrated for an interactive and responsive user interface.
					</li>
				</ul>
			</div>
			<p className="mt-8 text-center text-sm font-medium">
				Embark on an unforgettable shopping journey with <span className="text-blue-400">Beatzz—where audio dreams come to life.</span>
			</p>
			<span className="m-auto mt-10 flex max-w-[90%] justify-between text-[0.8rem] font-bold min-[401px]:text-[1rem] min-[514px]:text-xl sm:max-w-[530px]">
				<a href="https://beatzzz.netlify.app" className="relative animate-pulse text-red-500 " target="_blank" rel="noopener noreferrer">
					See Live
				</a>
				<a href="https://github.com/arnab710/Beatzz" className="relative animate-pulse text-red-500 " target="_blank" rel="noopener noreferrer">
					Backend
				</a>
				<a href="https://github.com/arnab710/Beatzz-FrontEnd/tree/main/vite-project" target="_blank" rel="noopener noreferrer" className="relative animate-pulse text-red-500">
					Frontend
				</a>
			</span>
		</section>
	);
};

export default EachProject;
