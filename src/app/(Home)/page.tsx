import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

const Home: React.FC = () => {
	return (
		<main>
			<Navbar />
			<HeroSection />
			<div style={{ height: `300vh` }}></div>
		</main>
	);
};

export default Home;
