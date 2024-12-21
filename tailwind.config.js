/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
    	extend: {
    		colors: {
    			background: 'var(--background)',
    			'background-alt': 'var(--background-alt)',
    			foreground: 'var(--foreground)',
    			'muted-foreground': 'var(--muted-foreground)',
    			muted: 'var(--muted)',
    			border: 'var(--border)',
    			primary: 'var(--primary)',
    			'secondary': 'var(--secondary)'
    		},
    		aspectRatio: {
    			card: '350 / 235'
    		},
    		screens: {
    			desktop: '1280px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	},
    	fontFamily: {
    		inter: [
    			'Inter',
    			'sans-serif'
    		],
    		lato: [
    			'Lato',
    			'sans-serif'
    		]
    	}
    },
  plugins: [require("tailwindcss-animate")],
}