"use client";

import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import Image from "next/image";
import React, { useRef } from "react";
import Connect1 from "../../public/assets/Connect1.png";
import Connect2 from "../../public/assets/Connect2.png";
import Connect3 from "../../public/assets/Connect3.png";
import Connect4 from "../../public/assets/Connect4.png";

const ConnectDescription: React.FC = () => {
	const divRef1 = useRef<HTMLDivElement | null>(null);
	const divRef2 = useRef<HTMLDivElement | null>(null);
	const divRef3 = useRef<HTMLDivElement | null>(null);
	const divRef4 = useRef<HTMLDivElement | null>(null);

	const isVisible1 = useIntersectionObserver(divRef1, { threshold: 0 });
	const isVisible2 = useIntersectionObserver(divRef2, { threshold: 0 });
	const isVisible3 = useIntersectionObserver(divRef3, { threshold: 0 });
	const isVisible4 = useIntersectionObserver(divRef4, { threshold: 0 });

	return (
		<section className="m-auto mt-24 overflow-hidden lg:max-w-[1024px]">
			<a href="https://connect-ad710.netlify.app" className="w-max animate-pulse text-3xl font-semibold text-blue-400 underline underline-offset-4" target="_blank" rel="noopener noreferrer">
				Connect
			</a>
			<div ref={divRef1} style={{ marginTop: `50px` }} className={`opacity-0 ${isVisible1 && `animate-leftAnimation`}`}>
				<Image src={Connect1} alt="Connect Website Img" style={{ width: `100%` }} />
				<p className="mt-3 text-center text-xs font-semibold min-[478px]:text-base">
					<span className="text-sm text-blue-400 min-[478px]:text-lg">🌐 Connect</span> : Engage, Interact, and Build Your Network
				</p>
				<span className="m-auto mt-10 flex max-w-[90%] justify-between text-[0.8rem] font-bold min-[401px]:text-[1rem] min-[514px]:text-xl sm:max-w-[530px]">
					<a href="https://connect-ad710.netlify.app" className="relative animate-pulse text-red-500 " target="_blank" rel="noopener noreferrer">
						See Live
					</a>
					<a href="https://github.com/arnab710/Connect" className="relative animate-pulse text-red-500 " target="_blank" rel="noopener noreferrer">
						Backend
					</a>
					<a href="https://github.com/arnab710/Connect_Frontend" target="_blank" rel="noopener noreferrer" className="relative animate-pulse text-red-500">
						Frontend
					</a>
				</span>
				<div className="mt-6 text-start text-xs">
					<p>
						* Test Account Email : <span className="text-blue-400">arnabdey710@gmail.com</span>
					</p>
					<p>
						* Test Account Password : <span className="text-blue-400">12345678</span>
					</p>
				</div>
				<p className="mt-12 text-sm">
					Unleash the power of social connectivity with Connect, your one-stop platform to share life in pixels and sound. This isn&apos;t just a place to post photos; it&apos;s a full-fledged digital
					universe to narrate your story through pictures, videos, and even audio clips!
				</p>
			</div>
			<div ref={divRef2} className={`opacity-0 ${isVisible2 && `animate-rightAnimation`}`} style={{ marginTop: `30px` }}>
				<Image src={Connect2} alt="Connect Website Img" style={{ width: `100%` }} />
				<h1 className="mt-10 text-left font-semibold">
					<span className="animated-underline text-blue-400">Features</span> at a Glance 🔍
				</h1>
				<ul className="mt-4 list-disc text-sm">
					<li>
						<span className="font-bold text-blue-400">Share the Vibe</span> : Post photos, videos, and even audio clips to capture the full spectrum of your life.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Follow Your Tribe</span> : Tailor your newsfeed by following or unfollowing users, so you see what truly matters to you.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Engage</span> : Like and comment on posts from your network, opening up avenues for real conversations.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Make It Yours</span> : Customize your profile with easily updateable profile and cover photos.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Forgetful? No Problem</span> : Utilize the forgot password feature to reset and regain access to your account.
					</li>
				</ul>
			</div>
			<div ref={divRef3} className={`opacity-0 ${isVisible3 && `animate-leftAnimation`}`} style={{ marginTop: `30px` }}>
				<Image src={Connect3} alt="Connect Website Img" style={{ width: `100%` }} />
				<h1 className="mt-10 text-left font-semibold">
					Under the <span className="animated-underline text-blue-400">Hood</span> 🛠️
				</h1>
				<ul className="mt-4 list-disc text-sm">
					<li>
						<span className="font-bold text-blue-400">Backend</span> : Leverage the scalability and performance of Node and Express APIs.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Cloudinary Secure Uploads</span> : Enhanced media security by integrating Cloudinary&apos;s signature-based authentication, streamlining safe and
						efficient file uploads directly from the client-side.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Redis</span> : Employ advanced cache validation to make your feed load faster than ever. database handling that offers speed, scalability, and a
						no-compromise attitude towards data integrity.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">MongoDB and Mongoose</span> : Optimal data integrity and storage solutions.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">SendGrid</span> : Automated email service for sending reset password links.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">JWT Authentication</span> : Comprehensive user authentication using JSON Web Tokens for a secure and personalized experience.
					</li>
				</ul>
			</div>
			<div ref={divRef4} className={`opacity-0 ${isVisible4 && `animate-rightAnimation`}`} style={{ marginTop: `30px` }}>
				<Image src={Connect4} alt="Connect Website Img" style={{ width: `100%` }} />
				<h1 className="mt-10 text-left font-semibold">
					<span className="animated-underline text-blue-400">Frontend </span>Tools 🌐
				</h1>
				<ul className="mt-4 list-disc text-sm">
					<li>
						<span className="font-bold text-blue-400">TypeScript and React</span> : Unmatched UI/UX built on the solid foundation of TypeScript and React.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Frontend Cloudinary Integration</span> : Enhanced media upload efficiency by integrating Cloudinary&apos;s API for direct, secure, and fast
						client-side handling, reducing server load and preserving media quality.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">React Query</span> : Efficient and effective API calls for a fluid experience.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Redux and Context API</span> : Centralized and context-aware state management for a seamless user journey.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">React-hot-toast</span> : Enjoy real-time toast notifications, skillfully integrated for an interactive and responsive user interface.
					</li>
					<li className="mt-2">
						<span className="font-bold text-blue-400">Cropper.js</span> : Customize your profile and cover photos to get them just the way you like, thanks to Cropper.js.interface.
					</li>
				</ul>
			</div>
			<p className="mt-8 text-center text-sm font-medium">
				<span className="text-blue-400">Dive into Connect </span>, the social media platform where genuine human connections are just a click away. Beatzz—where audio dreams come to life.
			</p>
		</section>
	);
};

export default ConnectDescription;
