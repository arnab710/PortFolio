import dynamic from "next/dynamic";
import React from "react";

const Navbar = dynamic(() => import("@/components/Navbar"), {
	loading: () => <p className="mt-3 p-3 text-center">Loading</p>,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
	loading: () => <p className="mt-3 p-3 text-center">Loading</p>,
});
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
	loading: () => <p className="mt-3 p-3 text-center">Loading</p>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
	loading: () => <p className="mt-3 p-3 text-center">Loading</p>,
});
const Projects = dynamic(() => import("@/components/Projects"), {
	loading: () => <p className="mt-3 p-3 text-center">Loading</p>,
});
const Skill = dynamic(() => import("@/components/Skill"), {
	loading: () => <p className="mt-3 p-3 text-center">Loading</p>,
});
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
