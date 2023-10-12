import React from "react";
import ParticleContainer from "./ParticleContainer";

const HeroSection: React.FC = () => {
	return (
		<section id="tsparticles" className="flex min-h-screen flex-col justify-center text-white">
			<div className=" flex min-h-screen min-w-full flex-col justify-center gap-y-2">
				<h1 className="text-center text-3xl">
					Hey there! <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
				</h1>
				<p className="text-center text-4xl">
					I&apos;m <span className="font-semibold text-blue-500">Arnab Dey</span>,
				</p>
			</div>
			<ParticleContainer />
			<div className=" min-h-screen min-w-full border-2 border-pink-500"></div>
		</section>
	);
};

export default HeroSection;
