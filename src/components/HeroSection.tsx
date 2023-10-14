import { AiOutlineGithub, AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import React from "react";
import ParticleContainer from "./ParticleContainer/ParticleContainer";
import Image from "next/image";
import myImagePath from "../../public/assets/my-img.png";
import TypeWriterComponent from "@/utils/TypeWriter/TypeWriter";
import AnimatedHeader from "@/utils/AnimatedHeader";

const HeroSection: React.FC = () => {
	return (
		<section id="Hero" className="px-10 sm:flex sm:items-center sm:justify-between lg:justify-evenly xl:mx-auto xl:max-w-[1280px]">
			<div className="flex min-h-screen min-w-full items-center sm:mt-[0] sm:min-w-0 sm:max-w-[60%] sm:pl-2">
				<div className="flex flex-col gap-y-4">
					<h1 className="text-left text-3xl min-[465px]:text-4xl sm:text-3xl md:text-4xl min-[925px]:text-5xl">
						Hey there! <span className="inline-block origin-[70%_70%] animate-wave">👋</span>
					</h1>
					<p className="text-left text-4xl min-[465px]:text-5xl sm:text-3xl md:text-5xl min-[925px]:text-6xl">
						I&apos;m <span className="font-semibold text-blue-500">Arnab Dey</span>,
					</p>
					<TypeWriterComponent />
					<ul className="mt-4 flex max-w-[80%] justify-between">
						<li>
							<a href="https://github.com/arnab710" target="_blank" rel="noopener noreferrer">
								<AiOutlineGithub className="text-2xl hover:text-blue-400" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/arnab.dey710" target="_blank" rel="noopener noreferrer">
								<AiOutlineInstagram className="text-2xl hover:text-blue-400" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/profile.php?id=100008547909444" target="_blank" rel="noopener noreferrer">
								<AiOutlineFacebook className="text-2xl hover:text-blue-400" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/arnab-dey-09398b227" target="_blank" rel="noopener noreferrer">
								<AiOutlineLinkedin className="text-2xl hover:text-blue-400" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<ParticleContainer />
			<div className="flex min-h-[90vh] min-w-full flex-col items-center justify-between sm:min-h-screen sm:min-w-0 sm:max-w-[40%] sm:justify-center">
				<AnimatedHeader />
				<Image alt="my-picture" src={myImagePath} style={{ maxWidth: `100%`, height: `auto`, zIndex: 10 }} priority />
			</div>
		</section>
	);
};

export default HeroSection;
