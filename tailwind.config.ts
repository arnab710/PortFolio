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
			},
			animation: {
				wave: "waveAnimation 2.5s infinite",
				headAnimation: "headAnimation 1.3s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
export default config;
