/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				"background-alt": "var(--background-alt)",
				foreground: "var(--foreground)",
				"muted-foreground": "var(--muted-foreground)",
				muted: "var(--muted)",
				border: "var(--border)",
				primary: "var(--primary)",
			},
		},
	},
  plugins: [],
}