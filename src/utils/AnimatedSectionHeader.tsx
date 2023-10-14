"use client";
import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import React, { useRef } from "react";

const AnimatedSectionHeader: React.FC<{ firstTitle: string; lastTitle: string }> = ({ firstTitle, lastTitle }) => {
	const headRef = useRef<HTMLHeadingElement | null>(null);

	const isVisible = useIntersectionObserver(headRef, { threshold: 0 });

	return (
		<h1 ref={headRef} className={`text-center text-4xl font-semibold tracking-wide opacity-0 ${isVisible && `animate-headAnimation2`}`}>
			{firstTitle} <span className="animated-underline text-blue-400">{lastTitle}</span>
		</h1>
	);
};

export default AnimatedSectionHeader;
