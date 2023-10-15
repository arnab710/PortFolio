import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
	loading: () => <p>Loading</p>,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
	loading: () => <p>Loading</p>,
});
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
	loading: () => <p>Loading</p>,
});
const Contact = dynamic(() => import("@/components/Contact"), {
	loading: () => <p>Loading</p>,
});
const Projects = dynamic(() => import("@/components/Projects"), {
	loading: () => <p>Loading</p>,
});
const Skill = dynamic(() => import("@/components/Skill"), {
	loading: () => <p>Loading</p>,
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
