/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...colors,
			"cod-gray": {
				DEFAULT: "#161616",
				50: "#444444",
				100: "#3F3F3F",
				200: "#353535",
				300: "#2A2A2A",
				400: "#202020",
				500: "#161616",
				600: "#131313",
				700: "#111111",
				800: "#0E0E0E",
				900: "#0C0C0C",
			},

			silver: {
				DEFAULT: "#C0C0C0",
				50: "#EEEEEE",
				100: "#E9E9E9",
				200: "#DFDFDF",
				300: "#D4D4D4",
				400: "#CACACA",
				500: "#C0C0C0",
				600: "#A4A4A4",
				700: "#888888",
				800: "#6C6C6C",
				900: "#505050",
			},
		},
		extend: {
			animation: {
				intro: "intro 0.3s forwards ease-in-out"
			},
			keyframes: {
				intro: {
					"0%": {
						transform: "translateY(10px)",
						opacity: "0",
					},
					"100%": {
						transform: "translateY(0px)",
						opacity: "1",
					},
				},
			}
		},
	},
	plugins: [],
}
