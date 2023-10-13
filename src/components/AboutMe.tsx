import AboutMeHeader from "@/utils/AboutMeHeader";
import ProfessionalSummary from "@/utils/ProfessionalSummary";
import React from "react";

const AboutMe: React.FC = () => {
	return (
		<section className="mt-10 bg-black px-10">
			<div className="mt-10 py-12">
				<AboutMeHeader />
			</div>
			<p className="text-white">Full-Stack Developer & Recent B.Tech Graduate in Electronics and Communication Engineering</p>
			<ProfessionalSummary />
		</section>
	);
};

export default AboutMe;
