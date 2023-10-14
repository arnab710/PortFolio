"use client";
import useProgrssBarIncrease from "@/Hooks/useProgrssBarIncreas";
import { ProgressBar } from "@tremor/react";
import React from "react";

const SkillProgress: React.FC = () => {
	const val = useProgrssBarIncrease(75);

	return <ProgressBar value={val} label={`${String(val)}`} showAnimation={true} className="mt-10 font-semibold" />;
};

export default SkillProgress;
