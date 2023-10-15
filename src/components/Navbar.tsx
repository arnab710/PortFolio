"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineHome, AiOutlineUser, AiOutlineFileDone } from "react-icons/ai";
import { FaUserClock } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLinksss } from "react-scroll";

const Navbar = () => {
	const [openHamBurgerList, setOpenHamBurgerList] = useState<boolean>(false);
	const hamburgerRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		function handleClickOutside(event: Event) {
			setOpenHamBurgerList(false);
		}
		function namedClickListener(event: Event) {
			handleClickOutside(event);
		}
		document.addEventListener("click", namedClickListener, true);

		return () => {
			document.removeEventListener("click", namedClickListener, true);
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
						setOpenHamBurgerList((state) => !state);
					}}
				>
					<GiHamburgerMenu />
				</span>
				<section ref={hamburgerRef} className={`absolute  top-[70px] z-20 flex w-screen flex-col bg-black transition-all delay-0 duration-300 ${openHamBurgerList ? `left-0` : `left-[-100vw]`}`}>
					<ScrollLinksss
						to="Hero"
						spy={true}
						activeClass="text-blue-400"
						smooth={true}
						duration={1500}
						aria-label="hello"
						href="#"
						className=" flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400"
					>
						<AiOutlineHome />
						<span>Home</span>
					</ScrollLinksss>
					<ScrollLinksss
						to="AboutMe"
						spy={true}
						activeClass="text-blue-400"
						smooth={true}
						offset={-80}
						duration={1500}
						href="#"
						className="flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400"
					>
						<AiOutlineUser />
						<span>About Me</span>
					</ScrollLinksss>
					<ScrollLinksss
						to="skill"
						spy={true}
						smooth={true}
						activeClass="text-blue-400"
						offset={-120}
						duration={1500}
						href="#"
						className="flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400"
					>
						<CgWebsite />
						<span>Expertise</span>
					</ScrollLinksss>
					<ScrollLinksss
						to="projects"
						spy={true}
						smooth={true}
						activeClass="text-blue-400"
						offset={-110}
						duration={1500}
						href="#"
						className="flex min-h-[70px] items-center justify-center gap-2 border-b-[0.1px] border-dashed border-gray-400 hover:text-blue-400"
					>
						<AiOutlineFileDone />
						<span>Projects</span>
					</ScrollLinksss>
					<ScrollLinksss
						to="Contact"
						spy={true}
						smooth={true}
						activeClass="text-blue-400"
						offset={-100}
						duration={1500}
						href="#"
						className="flex min-h-[70px] items-center justify-center gap-2 hover:text-blue-400"
					>
						<FaUserClock />
						<span>Hire Me</span>
					</ScrollLinksss>
				</section>
			</div>
			<section className="mr-3 hidden gap-[4rem] text-lg font-[400] min-[884px]:flex min-[884px]:justify-evenly">
				<ScrollLinksss to="Hero" spy={true} href="#" activeClass="text-blue-400" smooth={true} duration={1500} className="liStyle">
					<AiOutlineHome />
					<span>Home</span>
				</ScrollLinksss>
				<ScrollLinksss to="AboutMe" spy={true} href="#" activeClass="text-blue-400" smooth={true} offset={-80} duration={1500} className="liStyle">
					<AiOutlineUser />
					<span>About Me</span>
				</ScrollLinksss>
				<ScrollLinksss to="skill" spy={true} href="#" smooth={true} activeClass="text-blue-400" offset={-120} duration={1500} className="liStyle">
					<CgWebsite />
					<span>Expertise</span>
				</ScrollLinksss>
				<ScrollLinksss to="projects" spy={true} href="#" smooth={true} activeClass="text-blue-400" offset={-110} duration={1500} className="liStyle">
					<AiOutlineFileDone />
					<span>Projects</span>
				</ScrollLinksss>
				<ScrollLinksss to="Contact" spy={true} href="#" smooth={true} activeClass="text-blue-400" offset={-100} duration={1500} className="liStyle">
					<FaUserClock />
					<span>Hire Me</span>
				</ScrollLinksss>
			</section>
		</nav>
	);
};

export default Navbar;
