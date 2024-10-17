import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// Custom font-size
		fontSize: {
			xs: "0.6rem",
			xm: "0.8rem",
			base: "1.25rem",
			xl: "1.25rem",
			"2xl": "1.563rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"5xl": "3.052rem",
			"6xl": [
				"4.875rem",
				{
					lineHeight: "2rem",
					letterSpacing: "-0.02em",
					fontWeight: "700",
				},
			],
		},
		container: {
			// screens are actually screen resolutions and they are used to make set the breakpoint for each one in order to make our website responsive:
			// for instance tailcss set default define its default screens like sm, md,lg,xl,2xl and each and it also define its own breakpoints

			// a breakpoint is actually a max width of a screen  for instance for xm: extra device th e max width are gonna set when we reach 360 and 574

			// we are going to overide that and set our own screens and breakpoints.
			//Good to know : screens resolution ends at 2xl so they do not work in html element afetr that value like 3xl:text-white ( not possible )
			//Feel free to have as few or as many screens as you want, naming them in whatever way you’d prefer for your project.
			screens: {
				xm: "360px",
				sm: "575px",
				md: "768px",
				lg: "992px",
				xl: "1280px",
				"2xl": "1440px",
				"3xl": "1680px",
				"4xl": "1920px",
			},
			center: true,
			// container class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if you’d prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.
			// to center with tailwind class we use mx-auto
			padding: {
				DEFAULT: "0rem",
				xm: "0",
				sm: "0",
				md: "0",
				lg: "0",
				xl: "0",
				"2xl": "2rem",
				"3xl": "2rem",
				"4xl": "2rem",
			}
		},
		colors: {
			// 'minsk'
			primary: {
				"50": "#eef3ff",
				"100": "#e0e8ff",
				"200": "#c7d5fe",
				"300": "#a5b8fc",
				"400": "#8192f8",
				"500": "#636df1",
				"600": "#4846e5",
				"700": "#3c38ca",
				"800": "#3230a3",
				"900": "#33348e",
				"950": "#1c1b4b",
			},

			// 'persian-red'
			secondary: {
				"50": "#fef2f2",
				"100": "#fee2e3",
				"200": "#fecacc",
				"300": "#fca5a9",
				"400": "#f77277",
				"500": "#ee454c",
				"600": "#cc2229",
				"700": "#b81d23",
				"800": "#981c21",
				"900": "#7e1e22",
				"950": "#450a0c",
			},

			// Defaults colors
			slate: colors.slate,
			neutral: colors.neutral,
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			orange: colors.orange,
			indigo: colors.indigo,
			green: colors.green,
			red: colors.red,
			yellow: colors.yellow,
			transparent: "transparent",
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [tailwindcssAnimate],
};

export default config;
