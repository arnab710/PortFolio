import { BsFillDatabaseFill } from "react-icons/bs";
import AnimatedSectionHeader from "@/utils/AnimatedSectionHeader";
import React from "react";
import SkillShowBar from "./SkillShowBar";

const Skill: React.FC = () => {
	return (
		<main id="skill" className="m-auto mt-40 min-h-max bg-transparent px-10 lg:max-w-[1024px]">
			<AnimatedSectionHeader firstTitle="My" lastTitle="Toolkit" />
			<section className="m-auto">
				<h2 className="m-auto mt-14 text-left text-xl sm:max-w-[80%]">
					<span className="animated-underline text-blue-400">Frontend</span> Tools 🌐
				</h2>
				<SkillShowBar skillType="frontend" />
			</section>
			<section>
				<h2 className="m-auto mt-[80px] text-left text-xl font-semibold sm:max-w-[80%]">
					<span className="animated-underline text-blue-400">Backend</span> Tools 💾
				</h2>
				<SkillShowBar skillType="backend" />
			</section>
			<section>
				<div className="m-auto mt-[80px] flex items-center gap-2 text-left text-xl sm:max-w-[80%]">
					<span className="font-semibold">
						<span className="animated-underline text-blue-400">Database</span> Tools
					</span>
					<BsFillDatabaseFill />
				</div>
				<SkillShowBar skillType="database" />
			</section>
			<section>
				<h2 className="m-auto mt-[80px] text-left text-xl font-semibold sm:max-w-[80%]">
					<span className="animated-underline text-blue-400">Deployment</span> Tools ⚙️
				</h2>
				<SkillShowBar skillType="deployment" />
			</section>
			<section>
				<h2 className="m-auto mt-[80px] text-left text-xl font-semibold sm:max-w-[80%]">Other Tools 👨‍💻</h2>
				<SkillShowBar skillType="others" />
			</section>
		</main>
	);
};

export default Skill;
