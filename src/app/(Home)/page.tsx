import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
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
			<Contact />
			<h1 className="mt-3 bg-black p-3 text-center">Designed By @Arnab Dey</h1>
		</main>
	);
};

export default Home;
