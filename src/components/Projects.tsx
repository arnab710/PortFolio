import AnimatedSectionHeader from "@/utils/AnimatedSectionHeader";
import React from "react";
import BeatzzDescription from "@/utils/BeatzzDescription";
import ConnectDescription from "@/utils/ConnectDescription";

const Projects = () => {
	return (
		<main id="projects" className="mt-40 overflow-x-hidden px-10">
			<AnimatedSectionHeader firstTitle="My Major" lastTitle="Projects" />
			<BeatzzDescription />
			<ConnectDescription />
		</main>
	);
};

export default Projects;
