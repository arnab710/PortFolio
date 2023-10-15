import AnimatedSectionHeader from "@/utils/AnimatedSectionHeader";
import React from "react";
import EachProject from "@/utils/EachProject";

const Projects = () => {
	return (
		<main id="projects" className="mt-40 min-h-[450vh] overflow-x-hidden px-10">
			<AnimatedSectionHeader firstTitle="My Major" lastTitle="Projects" />
			<EachProject />
		</main>
	);
};

export default Projects;
