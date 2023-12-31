"use client";

import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import React, { useRef } from "react";

const AnimatedHeader: React.FC = () => {
	const hRef = useRef<HTMLHeadingElement | null>(null);

	const isVisible = useIntersectionObserver(hRef, { threshold: 0 });

	return (
		<h1 ref={hRef} className={`mt-4 text-center text-[1.3rem] opacity-0 sm:hidden ${isVisible && `animate-headAnimation`}`}>
			Let&apos;s Build Something <span className="animated-underline text-2xl font-bold text-blue-400">Amazing</span> Together! 👷‍♂️
		</h1>
	);
};

export default AnimatedHeader;
