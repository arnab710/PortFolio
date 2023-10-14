"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineHome, AiOutlineUser, AiOutlineFileDone } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const [openHamBurgerList, setOpenHamBurgerList] = useState<boolean>(false);
	const hamburgerRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		function handleClickOutside(event: Event) {
			if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
				setOpenHamBurgerList(false);
			}
		}
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 200) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`fixed left-0 top-0 z-50 flex min-h-[100px] w-full items-center justify-between  ${scrolled ? `backdrop-blur-md` : `bg-transparent`} px-4 text-center`}>
			<div className="border-2 p-1 font-bold tracking-wide text-blue-400">AD.</div>
			<div className="group">
				<span
					className="text-2xl min-[884px]:hidden"
					onClick={(e) => {
						e.nativeEvent.stopImmediatePropagation();
						setOpenHamBurgerList((state) => !state);
					}}
				>
					<GiHamburgerMenu />
				</span>
				<ul ref={hamburgerRef} className={`absolute  top-[70px] z-20 flex w-screen flex-col bg-black transition-all delay-0 duration-300 ${openHamBurgerList ? `left-0` : `left-[-100vw]`}`}>
					<li className=" flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400">
						<AiOutlineHome />
						<span>Home</span>
					</li>
					<li className="flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400">
						<AiOutlineUser />
						<span>About Me</span>
					</li>
					<li className="flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400">
						<CgWebsite />
						<span>Projects</span>
					</li>
					<li className="flex min-h-[70px] items-center justify-center border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400">
						<AiOutlineFileDone />
						<span>Resume</span>
					</li>
					<li className="flex min-h-[70px] items-center justify-center gap-2 hover:text-blue-400">
						<FaUserClock />
						<span>Hire Me</span>
					</li>
				</ul>
			</div>
			<ul className="mr-3 hidden gap-[4rem] text-lg font-[400] min-[884px]:flex min-[884px]:justify-evenly">
				<li className="liStyle">
					<AiOutlineHome />
					<span>Home</span>
				</li>
				<li className="liStyle">
					<AiOutlineUser />
					<span>About Me</span>
				</li>
				<li className="liStyle">
					<CgWebsite />
					<span>Projects</span>
				</li>
				<li className="liStyle">
					<AiOutlineFileDone />
					<span>Resume</span>
				</li>
				<li className="liStyle">
					<FaUserClock />
					<span>Hire Me</span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
