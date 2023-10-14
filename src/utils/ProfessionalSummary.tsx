"use client";

import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import React, { useRef } from "react";

const ProfessionalSummary: React.FC = () => {
	const articleRef1 = useRef<HTMLElement | null>(null);
	const articleRef2 = useRef<HTMLElement | null>(null);
	const articleRef3 = useRef<HTMLElement | null>(null);

	const isVisible1 = useIntersectionObserver(articleRef1, { threshold: 0.1 });
	const isVisible2 = useIntersectionObserver(articleRef2, { threshold: 0.1 });
	const isVisible3 = useIntersectionObserver(articleRef3, { threshold: 0.1 });

	return (
		<>
			<article ref={articleRef1} className={`mt-12 opacity-0 ${isVisible1 && `animate-leftAnimation`}`}>
				<h1 className="text-left text-xl font-semibold">
					<span className="animated-underline text-blue-400">Professional</span> Summary📝
				</h1>
				<p className="mt-8 w-[85%] text-left text-sm">
					Dedicated and results-oriented, I specialize in full-stack development with proficiency in a wide range of technologies, including but not limited to React.js, Node, MongoDB, and TypeScript.
					My academic background in Electronics and Communication Engineering lends me a unique perspective in software solutions.
				</p>
			</article>

			<article ref={articleRef2} className={`mt-12 opacity-0 ${isVisible2 && `animate-rightAnimation`}`}>
				<h1 className="text-left text-xl font-semibold">
					<span className="animated-underline text-blue-400">Problem</span> Solving 🧩
				</h1>
				<p className="mt-8 w-[85%] text-left text-sm">
					A natural problem-solver, I excel at algorithmic challenges and am always eager to tackle complex technical issues, ensuring efficiency and effectiveness in my solutions.
				</p>
			</article>

			<article ref={articleRef3} className={`mt-12 opacity-0 ${isVisible3 && `animate-leftAnimation`}`}>
				<h1 className="text-left text-xl font-semibold">
					<span className="animated-underline text-blue-400">Personal</span> Interests 🎸
				</h1>
				<p className="mt-8 w-[85%] text-left text-sm">
					Outside of work, I enjoy playing cricket and am a dedicated guitarist, reaffirming my belief in the importance of work-life balance and continuous learning.
				</p>
			</article>
		</>
	);
};

export default ProfessionalSummary;
