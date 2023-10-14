"use client";
import useIntersectionObserver from "@/Hooks/useIntersectionObserver";
import useProgrssBarIncrease from "@/Hooks/useProgrssBarIncrease";
import { ProgressBar } from "@tremor/react";
import React, { useRef } from "react";

const SkillProgress: React.FC = () => {
	const progressref = useRef<HTMLDivElement | null>(null);
	const isVisible = useIntersectionObserver(progressref, { root: null, rootMargin: `0px`, threshold: 0 });

	const val = useProgrssBarIncrease(75, isVisible);

	return <ProgressBar ref={progressref} value={val} label={`${String(val)}`} showAnimation={true} className="mt-10 font-semibold" />;
};

export default SkillProgress;
