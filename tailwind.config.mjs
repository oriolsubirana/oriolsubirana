/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,md,mdx,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Instrument Sans",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"Segoe UI",
					"sans-serif",
				],
			},
			colors: {
				accent: "#D8261F",
			},
			maxWidth: {
				prose: "68ch",
			},
		},
	},
	plugins: [],
};
