import AboutMeHeader from "@/utils/AboutMeHeader";
import ProfessionalSummary from "@/utils/ProfessionalSummary";
import React from "react";

const AboutMe: React.FC = () => {
	return (
		<section className="m-auto mt-10 bg-black px-10 lg:max-w-[1024px]">
			<div className="mt-10 py-12">
				<AboutMeHeader />
			</div>
			<p className="text-center md:text-xl">Full-Stack MERN Developer Specializing in React, Next.js, and Scalable Backend Solutions, Committed to Crafting High-Quality Web Experiences</p>
			<ProfessionalSummary />
		</section>
	);
};

export default AboutMe;
