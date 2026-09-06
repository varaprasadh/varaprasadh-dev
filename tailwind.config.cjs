/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				dusk: '#0E1218',
				ridge: '#1A2838',
				ember: '#E07A3D',
				gold: '#E8B86D',
				sand: '#F3EEE6',
				ink: '#16120E',
				haze: '#6E675E',
				line: '#DDD6CB',
			},
			fontFamily: {
				sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			letterSpacing: {
				tightest: '-0.04em',
			},
			typography: {
				read: {
					css: {
						'--tw-prose-body': '#16120E',
						'--tw-prose-headings': '#16120E',
						'--tw-prose-links': '#C45E28',
						'--tw-prose-bold': '#16120E',
						'--tw-prose-counters': '#6E675E',
						'--tw-prose-bullets': '#E07A3D',
						'--tw-prose-hr': '#DDD6CB',
						'--tw-prose-quotes': '#6E675E',
						'--tw-prose-quote-borders': '#E07A3D',
						'--tw-prose-captions': '#6E675E',
						'--tw-prose-code': '#C45E28',
						'--tw-prose-pre-code': '#F3EEE6',
						'--tw-prose-pre-bg': '#16120E',
						'--tw-prose-th-borders': '#DDD6CB',
						'--tw-prose-td-borders': '#DDD6CB',
						fontFamily: 'Outfit, ui-sans-serif, system-ui, sans-serif',
						fontSize: '1.125rem',
						lineHeight: '1.75',
						maxWidth: '62ch',
						'code::before': { content: '""' },
						'code::after': { content: '""' },
						a: {
							textUnderlineOffset: '3px',
							fontWeight: '500',
						},
						h2: { fontFamily: 'Syne, ui-sans-serif, sans-serif', fontWeight: '700' },
						h3: { fontFamily: 'Syne, ui-sans-serif, sans-serif', fontWeight: '700' },
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
