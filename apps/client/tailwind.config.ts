import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {
                'kb-primary': '#14AFE3',
                'kb-gray-900': '#212121',
            },
        },
    },
    plugins: [],
};
export default config;
