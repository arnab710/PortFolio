"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedHeader: React.FC = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<h1 data-aos="fade-up" data-aos-duration={900} className=" text-center text-[1.3rem] sm:hidden">
			Let&apos;s Build Something <span className="text-2xl font-bold text-blue-400">Amazing</span> Together! 👷‍♂️
		</h1>
	);
};

export default AnimatedHeader;
