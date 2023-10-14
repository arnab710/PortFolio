import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import React from "react";

const Home: React.FC = () => {
	return (
		<main className="overflow-y-hidden">
			<Navbar />
			<HeroSection />
			<AboutMe />
			<Skill />
		</main>
	);
};

export default Home;
