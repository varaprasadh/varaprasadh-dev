/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				salt: '#F4F6F8',
				ink: '#172033',
				bay: '#215A78',
				laterite: '#9C3D2E',
				mist: '#5C6773',
				line: '#D5DCE3',
			},
			fontFamily: {
				sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['Literata', 'ui-serif', 'Georgia', 'serif'],
			},
			fontSize: {
				measure: ['1.125rem', { lineHeight: '1.75' }],
			},
			typography: {
				read: {
					css: {
						'--tw-prose-body': '#172033',
						'--tw-prose-headings': '#172033',
						'--tw-prose-links': '#215A78',
						'--tw-prose-bold': '#172033',
						'--tw-prose-counters': '#5C6773',
						'--tw-prose-bullets': '#215A78',
						'--tw-prose-hr': '#D5DCE3',
						'--tw-prose-quotes': '#5C6773',
						'--tw-prose-quote-borders': '#215A78',
						'--tw-prose-captions': '#5C6773',
						'--tw-prose-code': '#9C3D2E',
						'--tw-prose-pre-code': '#F4F6F8',
						'--tw-prose-pre-bg': '#172033',
						'--tw-prose-th-borders': '#D5DCE3',
						'--tw-prose-td-borders': '#D5DCE3',
						fontFamily: 'Literata, ui-serif, Georgia, serif',
						fontSize: '1.125rem',
						lineHeight: '1.75',
						maxWidth: '65ch',
						'code::before': { content: '""' },
						'code::after': { content: '""' },
						a: {
							textUnderlineOffset: '3px',
							fontWeight: '500',
						},
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
