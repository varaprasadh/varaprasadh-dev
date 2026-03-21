/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				terminal: {
					bg: '#0a0a0a',
					surface: '#111111',
					border: '#222222',
					text: '#cccccc',
					muted: '#555555',
					green: '#4ade80',
				},
			},
			fontFamily: {
				mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
			},
			typography: {
				terminal: {
					css: {
						'--tw-prose-body': '#cccccc',
						'--tw-prose-headings': '#e8e8e8',
						'--tw-prose-links': '#4ade80',
						'--tw-prose-bold': '#e8e8e8',
						'--tw-prose-counters': '#555555',
						'--tw-prose-bullets': '#4ade80',
						'--tw-prose-hr': '#222222',
						'--tw-prose-quotes': '#cccccc',
						'--tw-prose-quote-borders': '#4ade80',
						'--tw-prose-captions': '#555555',
						'--tw-prose-code': '#4ade80',
						'--tw-prose-pre-code': '#cccccc',
						'--tw-prose-pre-bg': '#111111',
						'--tw-prose-th-borders': '#222222',
						'--tw-prose-td-borders': '#222222',
						fontFamily: '"JetBrains Mono", "Courier New", monospace',
						'code::before': { content: '""' },
						'code::after': { content: '""' },
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
