module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
			},
		},
		extend: {
			colors: {
				"dark-blue": "#2D3849",
				purple: "#9379EC",
				"purple-light": "#D4C9F8",
				"color-yellow": "#F8FF9A",
				theme2: "#F27D83",
			},
			fontFamily: {
				Poppins: ["'Poppins'", "sans-serif"],
			},
			spacing: {
				"safe-top": "env(safe-area-inset-top)",
				"safe-bottom": "env(safe-area-inset-bottom)",
			},
		},
	},
	darkMode: "selector",
	plugins: [],
};
