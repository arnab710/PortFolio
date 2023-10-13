import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/utils/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			keyframes: {
				waveAnimation: {
					"0%": { transform: "rotate( 0.0deg)" },
					"10%": { transform: "rotate(14.0deg)" },
					"20%": { transform: "rotate(-8.0deg)" },
					"30%": { transform: "rotate(14.0deg)" },
					"40%": { transform: "rotate(-4.0deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate( 0.0deg)" },
					"100%": { transform: "rotate( 0.0deg)" },
				},
				headAnimation: {
					"0%": {
						opacity: "0",
						transform: `translateY(130px)`,
					},
					"100%": {
						opacity: "1",
						transform: `translateY(0)`,
					},
				},
				headAnimation2: {
					"0%": {
						opacity: "0",
						transform: `translateY(80px)`,
					},
					"100%": {
						opacity: "1",
						transform: `translateY(0)`,
					},
				},
				leftAnimation: {
					"0%": {
						opacity: "0",
						transform: `translateX(-100px)`,
					},
					"100%": {
						opacity: "1",
						transform: `translateX(0)`,
					},
				},
				rightAnimation: {
					"0%": {
						opacity: "0",
						transform: `translateX(100px)`,
					},
					"100%": {
						opacity: "1",
						transform: `translateX(0)`,
					},
				},
			},
			animation: {
				wave: "waveAnimation 2.5s infinite",
				headAnimation: "headAnimation 1.3s ease-in-out forwards",
				headAnimation2: "headAnimation2 1s ease-in-out forwards",
				leftAnimation: "leftAnimation 1.2s ease-in-out forwards",
				rightAnimation: "rightAnimation 1.2s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;
