"use client";
import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import useProgrssBarIncrease from "@/Hooks/useProgrssBarIncrease";
import { ProgressBar } from "@tremor/react";
import React, { useRef } from "react";

const SkillProgress: React.FC<{ skillVal: number }> = ({ skillVal }) => {
	const progressref = useRef<HTMLDivElement | null>(null);
	const isVisible = useIntersectionObserver(progressref, { root: null, rootMargin: `0px`, threshold: 0 });

	const val = useProgrssBarIncrease(skillVal, isVisible);

	return <ProgressBar ref={progressref} value={val} label={`${String(val)}`} showAnimation={true} className="mt-1 font-semibold sm:m-auto sm:max-w-[80%]" />;
};

export default SkillProgress;
