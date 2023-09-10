import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            transitionDuration: {
                DEFAULT: '200ms',
            },
            colors: {
                'kb-primary': '#2196F3',
                'kb-secondary': '#032D42',

                'kb-success-dark': '#05944f',
                'kb-success-light': '#58C246',
                'kb-error-dark': '#c90613',
                'kb-error-light': '#e20613',
                'kb-info-dark': '#2196F3',
                'kb-info-light': '#64B5F6',
                'kb-warning-dark': '#FF9800',
                'kb-warning-light': '#FFC107',

                'kb-darkblue-100': '#334155',
                'kb-darkblue-200': '#131A23',
                'kb-darkblue-300': '#131A23',
                'kb-darkblue-400': '#0a1017',

                'kb-gray-100': '#CDCACC',
                'kb-gray-200': '#9B9B9B',
                'kb-gray-300': '#585858',
                'kb-gray-400': '#212931',
            },
        },
    },
    plugins: [],
};
export default config;
