import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";
import React from "react";

const Home: React.FC = () => {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<AboutMe />
			<Skill />
			<Projects />
		</main>
	);
};

export default Home;
