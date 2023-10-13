"use client";

import { Typewriter } from "react-simple-typewriter";
import React from "react";
import style from "./TypeWriter.module.css";

const TypeWriterComponent: React.FC = () => {
	return (
		<p className={style.typeWriterPara}>
			<span>- </span>
			<Typewriter words={["a Full Stack Web Developer", "a Freelancer", "an Open Source Contributor", "a Lifelong Learner"]} loop={false} cursor typeSpeed={40} deleteSpeed={50} delaySpeed={1500} />
		</p>
	);
};

export default TypeWriterComponent;
