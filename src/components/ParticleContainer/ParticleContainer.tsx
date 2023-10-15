"use client";

import React, { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleContainer: React.FC = () => {
	const customInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

	return (
		<Particles
			id="tsparticles"
			init={customInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: true,
					zIndex: -1,
				},
				particles: {
					number: {
						value: 20,
						density: {
							enable: false,
							value_area: 480,
						},
					},
					color: {
						value: "#ffffff",
					},
					shape: {
						type: "circle",
						stroke: {
							width: 0,
							color: "#000000",
						},
						polygon: {
							nb_sides: 9,
						},
						image: {
							src: "img/github.svg",
							width: 100,
							height: 100,
						},
					},
					opacity: {
						value: 0.1119552179128349,
						random: true,
						anim: {
							enable: false,
							speed: 0.242987777714781,
							opacity_min: 0.1,
							sync: true,
						},
					},
					size: {
						value: 25,
						random: true,
						anim: {
							enable: true,
							speed: 12.14938888573905,
							size_min: 0.1,
							sync: true,
						},
					},
					line_linked: {
						enable: true,
						distance: 255.89764094362266,
						color: "#ffffff",
						opacity: 0.14394242303078775,
						width: 1,
					},
					move: {
						enable: true,
						speed: 0.25,
						direction: "top",
						random: true,
						straight: true,
						out_mode: "out",
						bounce: false,
						attract: {
							enable: true,
							rotateX: 600,
							rotateY: 1200,
						},
					},
				},
				interactivity: {
					detect_on: "canvas",
					events: {
						onhover: {
							enable: true,
							mode: "repulse",
						},
						onclick: {
							enable: false,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						grab: {
							distance: 400,
							line_linked: {
								opacity: 1,
							},
						},
						bubble: {
							distance: 400,
							size: 40,
							duration: 2,
							opacity: 8,
							speed: 3,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
						push: {
							particles_nb: 4,
						},
						remove: {
							particles_nb: 2,
						},
					},
				},
				retina_detect: true,
			}}
		/>
	);
};

export default ParticleContainer;
