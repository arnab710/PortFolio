"use client";
import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import React, { useRef } from "react";

const AnimatedSectionHeader: React.FC<{ firstTitle: string; lastTitle: string; underlineSide?: "left" | "right" }> = ({ firstTitle, lastTitle, underlineSide = "right" }) => {
	const headRef = useRef<HTMLHeadingElement | null>(null);

	const isVisible = useIntersectionObserver(headRef, { threshold: 0 });

	return (
		<h1
			ref={headRef}
			className={`text-center ${lastTitle === "Projects" || firstTitle === "Connect" ? `text-2xl` : `text-4xl`} font-semibold tracking-wide opacity-0 ${isVisible && `animate-headAnimation2`}`}
		>
			<span className={`${underlineSide === "left" && `animated-underline text-blue-400`}`}>{firstTitle}</span>{" "}
			<span className={`${underlineSide === "right" && `animated-underline text-blue-400`}`}>{lastTitle}</span>
		</h1>
	);
};

export default AnimatedSectionHeader;
