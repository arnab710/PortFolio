import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

const Home: React.FC = () => {
	return (
		<main className="h-[300vh]">
			<Navbar />
			<HeroSection />
		</main>
	);
};

export default Home;
