"use client";
import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import React, { useRef } from "react";

const AboutMeHeader: React.FC = () => {
	const headRef = useRef<HTMLHeadingElement | null>(null);

	const isVisible = useIntersectionObserver(headRef, { threshold: 0.1 });

	return (
		<h1 ref={headRef} className={`text-center text-4xl font-semibold tracking-wide text-white opacity-0 ${isVisible && `animate-headAnimation`}`}>
			About Me
		</h1>
	);
};

export default AboutMeHeader;
