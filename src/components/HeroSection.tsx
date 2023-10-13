import React from "react";
import ParticleContainer from "./ParticleContainer";
import Image from "next/image";
import myImagePath from "../../public/assets/WhatsApp_Image_2023-10-12_at_13.26.13_724247ad-removebg-preview.png";
import TypeWriterComponent from "@/utils/TypeWriter/TypeWriter";

const HeroSection: React.FC = () => {
	return (
		<section className="px-10 text-white sm:mt-[10vh] sm:flex sm:items-center sm:justify-between sm:gap-2 lg:justify-evenly xl:mx-auto xl:max-w-[1280px]">
			<div className="mt-[25vh] min-h-[250px] min-w-full sm:mt-[0] sm:min-w-0 sm:max-w-[60%] sm:pl-2">
				<div className="flex flex-col gap-y-4">
					<h1 className="text-left text-3xl min-[465px]:text-4xl sm:text-3xl md:text-4xl min-[925px]:text-5xl">
						Hey there! <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
					</h1>
					<p className="text-left text-4xl min-[465px]:text-5xl sm:text-3xl md:text-5xl min-[925px]:text-6xl">
						I&apos;m <span className="font-semibold text-blue-500">Arnab Dey</span>,
					</p>
					<TypeWriterComponent />
				</div>
			</div>
			<ParticleContainer />
			<div className="flex min-h-[80vh] min-w-full justify-center sm:min-w-0 sm:max-w-[45%] sm:flex-none ">
				<Image alt="my-picture" src={myImagePath} style={{ maxWidth: `100%`, height: `auto` }} priority />
			</div>
		</section>
	);
};

export default HeroSection;
