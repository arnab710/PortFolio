import { skillsObjBackend, skillsObjDB, skillsObjDeployment, skillsObjFrontend, skillsObjOthers } from "@/constants/skillsobj";
import SkillProgress from "@/utils/ProgressBar";
import React from "react";
import Image from "next/image";
import iconTremor from "../../public/assets/tremor-icon.png";

const SkillShowBar: React.FC<{ skillType: string }> = ({ skillType }) => {
	let skillObj = null;

	if (skillType === "frontend") skillObj = skillsObjFrontend;
	else if (skillType === "backend") skillObj = skillsObjBackend;
	else if (skillType === "database") skillObj = skillsObjDB;
	else if (skillType === "deployment") skillObj = skillsObjDeployment;
	else skillObj = skillsObjOthers;

	return (
		<section>
			{skillObj &&
				skillObj.map((skill) => (
					<article key={skill.skillName} className="mt-8">
						<h1 className={`flex items-center gap-3 sm:m-auto sm:max-w-[80%] ${skill.skillName === "tremor.so" && `gap-1`}`}>
							<span>{skill.skillName}</span>
							{skill.icon ? (
								<skill.icon className="text-2xl" style={{ color: `${skill.class}`, fontSize: `20px` }} />
							) : (
								skill.skillName === "tremor.so" && <Image src={iconTremor} alt="tremor-icon" height={20} />
							)}
						</h1>
						<SkillProgress skillVal={skill.skillVal} />
					</article>
				))}
		</section>
	);
};

export default SkillShowBar;
