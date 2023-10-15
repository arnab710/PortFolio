import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		transparent: "transparent",
		current: "currentColor",
		extend: {
			colors: {
				// light mode
				tremor: {
					brand: {
						faint: "#eff6ff", // blue-50
						DEFAULT: "#3b82f6", // blue-500
						muted: "#bfdbfe",
					},
					content: {
						emphasis: "#fff",
					},
				},
			},
			borderRadius: {
				"tremor-full": "9999px",
			},
			fontSize: {
				"tremor-default": ["1rem", { lineHeight: "1.25rem" }],
			},
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
				headAnimation: "headAnimation 1.1s ease-in-out forwards",
				headAnimation2: "headAnimation2 1s ease-in-out forwards",
				leftAnimation: "leftAnimation 1.2s ease-in-out forwards",
				rightAnimation: "rightAnimation 1.2s ease-in-out forwards",
			},
		},
	},
	safelist: [
		{
			pattern:
				/^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
			variants: ["hover", "ui-selected"],
		},
		{
			pattern:
				/^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
		{
			pattern:
				/^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
		},
	],
	plugins: [require("@headlessui/tailwindcss")],
};
export default config;
