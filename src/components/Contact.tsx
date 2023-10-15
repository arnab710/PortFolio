import AnimatedSectionHeader from "@/utils/AnimatedSectionHeader";
import React from "react";
import FormInput from "./FormInput";

const Contact = () => {
	return (
		<main id="Contact" className="mt-40 px-10">
			<AnimatedSectionHeader firstTitle="Connect" lastTitle="with Me" underlineSide="left" />
			<FormInput />
		</main>
	);
};

export default Contact;
