import AnimatedSectionHeader from "@/utils/AnimatedSectionHeader";
import React from "react";

const Skill: React.FC = () => {
	return (
		<section className="mt-20 min-h-[100vh] bg-transparent px-10">
			<AnimatedSectionHeader firstTitle="My" lastTitle="Toolkit" />
			<h2 className="mt-14 text-left text-lg font-semibold">
				<span className="animated-underline text-blue-400">Frontend</span> Tools
			</h2>
		</section>
	);
};

export default Skill;
